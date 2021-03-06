import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { MainRoomsComponent } from './main-rooms/main-rooms.component';
import { LayoutModule } from '../layout/layout.module';
import { RoomInfoComponent } from './room-info/room-info.component';
import { RoomDisplayComponent } from './room-display/room-display.component';

@NgModule({
  declarations: [MainRoomsComponent, RoomInfoComponent, RoomDisplayComponent],
  imports: [CommonModule, RoomsRoutingModule, LayoutModule],
})
export class RoomsModule {}
