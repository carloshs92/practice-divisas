import { Component, OnInit } from '@angular/core';
import {ExchangeService} from "../all/services/exchange.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {createNumberMask} from "text-mask-addons/dist/textMaskAddons";

@Component({
  selector: 'app-money-exchange',
  templateUrl: './money-exchange.component.html',
  styleUrls: ['./money-exchange.component.css']
})
export class MoneyExchangeComponent implements OnInit {

  exchangeForm: FormGroup;
  mask: any;

  constructor(
    private exchangeService: ExchangeService,
    private formBuilder: FormBuilder) {

    this.exchangeForm = this.formBuilder.group({
      base: ['', [
        Validators.required
      ]],
      rate: ['', [ ]]
    });
    this.mask = {
      "USD": this.getMoneyFormat("$"),
      "EUR": this.getMoneyFormat("€")
    }

  }

  calculateExchange() {
    let key = "EUR";
    if (this.exchangeForm.invalid) { return }
    this.exchangeService.getExchanges(["base=USD", `symbols=${key}`])
      .subscribe(
        response => {
          console.log(response);
          let rate, base, result;
          rate = parseFloat(response.rates[key]);
          base = parseFloat(this.exchangeForm.get("base").value.split(" ")[1].split(",").join(""));
          result = base*rate;
          console.log(base, this.exchangeForm.get("base").value);
          this.exchangeForm.get("rate").setValue(result);
        }
      )
  }

  clearRate() {
    this.exchangeForm.get("rate").setValue("");
  }

  private getMoneyFormat(symbol) {
    return createNumberMask({
      prefix: `${symbol} `,
      allowDecimal: true,
      decimalLimit: 4
    })
  }

  ngOnInit() {

  }

}
