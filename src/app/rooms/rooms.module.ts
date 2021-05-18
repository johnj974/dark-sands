import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { MainRoomsComponent } from './main-rooms/main-rooms.component';


@NgModule({
  declarations: [
    MainRoomsComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
