import { Injectable } from '@angular/core';
import { RoomModel } from '../models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  //.
  roomServiceArray: RoomModel[] = [
    new RoomModel('Classic Rooms', '/assets/images/room.jpg', [
      {
        icon: 'fa fa-map-marker',
        name: 'tea',
      },
      { icon: 'fa fa-map-marker', name: 'coffee' },
    ]),
    new RoomModel('Deluxe Rooms', '/assets/images/room2.jpg', [
      {
        icon: 'fa fa-phone',
        name: 'tv',
      },
      { icon: 'fa fa-map-marker', name: 'tea' },
    ]),
    new RoomModel('Family Rooms', '/assets/images/room.jpg', [
      {
        icon: 'fa fa-map-marker',
        name: 'bed',
      },
      { icon: 'fa fa-map-marker', name: 'couch' },
    ]),
  ];

  retrieveRoomArray() {
    return this.roomServiceArray.slice();
  }

  constructor() {}
}
