import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiningRoutingModule } from './dining-routing.module';
import { MainDiningComponent } from './main-dining/main-dining.component';


@NgModule({
  declarations: [
    MainDiningComponent
  ],
  imports: [
    CommonModule,
    DiningRoutingModule
  ]
})
export class DiningModule { }
