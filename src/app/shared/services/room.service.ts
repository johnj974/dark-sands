import { Injectable } from '@angular/core';
import { RoomModel } from '../models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  //.
  roomServiceArray: RoomModel[] = [
    new RoomModel('room1', '/assets/images/room.jpg'),
    new RoomModel('room2', '/assets/images/room.jpg'),
  ];

  retrieveRoomArray() {
    return this.roomServiceArray.slice();
  }

  constructor() {}
}
