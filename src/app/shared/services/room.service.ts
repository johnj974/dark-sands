import { Injectable } from '@angular/core';
import { RoomModel } from '../models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  //.
  roomServiceArray: RoomModel[] = [
    new RoomModel('Classic Rooms', '/assets/images/room.jpg', [
      { icon: 'fa fa-coffee', name: 'Tea and Coffee making' },
      { icon: 'fa fa-tv', name: 'Satellite TV' },
      { icon: 'fa fa-bed', name: 'Double Bed' },
      { icon: 'fa fa-wifi', name: 'WiFi' },
      { icon: 'fa fa-bath', name: 'Ensuite Shower and Bath' },
      { icon: 'fa fa-phone', name: 'Direct Line Telephone' },
    ]),
    new RoomModel('Deluxe Rooms', '/assets/images/room2.jpg', [
      { icon: 'fa fa-coffee', name: 'Tea and Coffee making' },
      { icon: 'fa fa-tv', name: 'Satellite TV' },
      { icon: 'fa fa-bed', name: 'King Size Bed' },
      { icon: 'fa fa-wifi', name: 'WiFi' },
      { icon: 'fa fa-bath', name: 'Ensuite Shower and Bath' },
      { icon: 'fa fa-phone', name: 'Direct Line Telephone' },
      { icon: 'fa fa-hot-tub', name: 'Hot Tub' },
      { icon: 'fa fa-mountain', name: 'Scenic Views' },
    ]),
    new RoomModel('Family Rooms', '/assets/images/room.jpg', [
      { icon: 'fa fa-coffee', name: 'Tea and Coffee making' },
      { icon: 'fa fa-tv', name: 'Satellite TV' },
      { icon: 'fa fa-bed', name: 'Double Bed' },
      { icon: 'fa fa-bed', name: 'Three Single Beds' },
      { icon: 'fa fa-wifi', name: 'WiFi' },
      { icon: 'fa fa-bath', name: 'Ensuite Shower and Bath' },

      { icon: 'fa fa-phone', name: 'Direct Line Telephone' },
      { icon: 'fa fa-gamepad', name: 'Game Console' },
      { icon: 'fa fa-puzzle-piece', name: 'Board Games' },
    ]),
  ];

  retrieveRoomArray() {
    return this.roomServiceArray.slice();
  }

  constructor() {}
}
