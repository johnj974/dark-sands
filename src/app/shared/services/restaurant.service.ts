import { Injectable } from '@angular/core';
import { RestaurantModel } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  //.
  constructor() {}

  restaurantArray: RestaurantModel[] = [
    new RestaurantModel(
      "Joe's Steak House",
      'All Things Meat',
      'Steak House',
      '/assets/images/volcano.jpg',
      'steak'
    ),
    new RestaurantModel(
      "Jackie's Noodles",
      'All things Oriental',
      'Noodles',
      '/assets/images/volcano.jpg',
      'noodle'
    ),
    new RestaurantModel(
      'Marios Italian Cuisine',
      'All Things Italian',
      'Mario',
      '/assets/images/volcano.jpg',
      'pizza'
    ),
  ];

  getRestaurantArray() {
    return this.restaurantArray.slice();
  }

  getRestaurant(id) {
    return this.restaurantArray[id];
  }
}
