import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttractionsRoutingModule } from './attractions-routing.module';
import { MainAttractionsComponent } from './main-attractions/main-attractions.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    MainAttractionsComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    AttractionsRoutingModule
  ]
})
export class AttractionsModule { }
