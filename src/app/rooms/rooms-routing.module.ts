import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRoomsComponent } from './main-rooms/main-rooms.component';
import { RoomDisplayComponent } from './room-display/room-display.component';

const routes: Routes = [
  {
    path: '',
    component: MainRoomsComponent,
  },
  {
    path: ':id/:roomName',
    component: RoomDisplayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
