import { Injectable } from '@angular/core';
import { HomeModel } from '../models/home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  //.
  homeServiceArray: HomeModel[] = [
    new HomeModel(
      'Rooms',
      '/assets/images/room.jpg',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectusdoloremque eius ducimus obcaecati explicabo optio adipiscivoluptate, repellendus quibusdam illo veniam ab a ad officiis cumdebitis cupiditate numquam tempore.',
      'Rooms',
      'rooms'
    ),
    new HomeModel(
      'Discover',
      '/assets/images/explore2.jpg',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectusdoloremque eius ducimus obcaecati explicabo optio adipiscivoluptate, repellendus quibusdam illo veniam ab a ad officiis cumdebitis cupiditate numquam tempore.',
      'Explore',
      'attractions'
    ),
    new HomeModel(
      'Your Special Day',
      '/assets/images/church.jpg',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectusdoloremque eius ducimus obcaecati explicabo optio adipiscivoluptate, repellendus quibusdam illo veniam ab a ad officiis cumdebitis cupiditate numquam tempore.',
      'Weddings',
      'weddings'
    ),
    new HomeModel(
      'Feast Your Eyes',
      '/assets/images/dining.jpg',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectusdoloremque eius ducimus obcaecati explicabo optio adipiscivoluptate, repellendus quibusdam illo veniam ab a ad officiis cumdebitis cupiditate numquam tempore.',
      'Dining',
      'dining'
    ),
    new HomeModel(
      'Relax',
      '/assets/images/spa.jpg',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectusdoloremque eius ducimus obcaecati explicabo optio adipiscivoluptate, repellendus quibusdam illo veniam ab a ad officiis cumdebitis cupiditate numquam tempore.',
      'Dark Spa',
      'spa'
    ),
    new HomeModel(
      'Corporate Meetings',
      '/assets/images/business.jpg',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectusdoloremque eius ducimus obcaecati explicabo optio adipiscivoluptate, repellendus quibusdam illo veniam ab a ad officiis cumdebitis cupiditate numquam tempore.',
      'Business',
      'business'
    ),
  ];

  retrieveHomeArray() {
    return this.homeServiceArray.slice();
  }

  constructor() {}
}
