import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LayoutComponent } from './all/components/layout/layout.component';
import {MoneyExchangeComponent} from "./money-exchange/money-exchange.component";

const ROUTES: Routes = [
  { path: '', component: LayoutComponent, children: [
      { path: '', component: MoneyExchangeComponent}
    ] },
  { path: '', component: LayoutComponent},
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(ROUTES);
