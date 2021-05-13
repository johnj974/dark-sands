import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaRoutingModule } from './spa-routing.module';
import { MainSpaComponent } from './main-spa/main-spa.component';


@NgModule({
  declarations: [
    MainSpaComponent
  ],
  imports: [
    CommonModule,
    SpaRoutingModule
  ]
})
export class SpaModule { }
