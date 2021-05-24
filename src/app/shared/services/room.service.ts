import { Injectable } from '@angular/core';
import { RoomModel } from '../models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  //.
  roomServiceArray: RoomModel[] = [
    new RoomModel('Classic Rooms', '/assets/images/room.jpg'),
    new RoomModel('Deluxe Rooms', '/assets/images/room2.jpg'),
    new RoomModel('Family Rooms', '/assets/images/room.jpg'),
  ];

  retrieveRoomArray() {
    return this.roomServiceArray.slice();
  }

  constructor() {}
}
