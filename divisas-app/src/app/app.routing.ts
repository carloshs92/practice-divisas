import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LayoutComponent } from './all/components/layout/layout.component';
import {IndexComponent} from "./index/index.component";

const ROUTES: Routes = [
  { path: '', component: LayoutComponent, children: [
      { path: '', component: IndexComponent}
    ] },
  { path: '', component: LayoutComponent},
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(ROUTES);
