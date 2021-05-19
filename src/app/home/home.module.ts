import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AttractionsComponent } from './attractions/attractions.component';


@NgModule({
  declarations: [
    MainHomeComponent,
    RoomsComponent,
    AttractionsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
