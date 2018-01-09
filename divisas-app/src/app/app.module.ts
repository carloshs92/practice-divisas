import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LayoutComponent } from './all/components/layout/layout.component';
import { FooterComponent } from './all/components/layout/footer/footer.component';
import { HeaderComponent } from './all/components/layout/header/header.component';
import { MoneyExchangeComponent } from './index/money-exchange/money-exchange.component';
import {ExchangeService} from "./all/services/exchange.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TextMaskModule} from "angular2-text-mask";
import { HistoricPriceComponent } from './index/historic-price/historic-price.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    MoneyExchangeComponent,
    HistoricPriceComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule
  ],
  providers: [ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
