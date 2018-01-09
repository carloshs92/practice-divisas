import { Component, OnInit } from '@angular/core';
import {ExchangeService} from "../all/services/exchange.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-money-exchange',
  templateUrl: './money-exchange.component.html',
  styleUrls: ['./money-exchange.component.css']
})
export class MoneyExchangeComponent implements OnInit {

  exchangeForm: FormGroup;

  constructor(
    private exchangeService: ExchangeService,
    private formBuilder: FormBuilder) {

    this.exchangeForm = this.formBuilder.group({
      base: ['', [
        Validators.required,
        Validators.maxLength(2)
      ]],
      result: ['', [
        Validators.required,
        Validators.maxLength(2)
      ]]
    });

  }

  calculateExchange() {
    this.exchangeService.getExchanges(["base=USD", "symbols=EUR"])
      .subscribe(
        response => {
          console.log(response);
        }
      )
  }

  ngOnInit() {

  }

}
