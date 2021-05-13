import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttractionsRoutingModule } from './attractions-routing.module';
import { MainAttractionsComponent } from './main-attractions/main-attractions.component';


@NgModule({
  declarations: [
    MainAttractionsComponent
  ],
  imports: [
    CommonModule,
    AttractionsRoutingModule
  ]
})
export class AttractionsModule { }
