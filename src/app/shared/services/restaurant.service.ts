import { Injectable } from '@angular/core';
import { RestaurantModel } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  //.
  constructor() {}

  restaurantArray: RestaurantModel[] = [
    new RestaurantModel("Joe's Steak House", 'All Things Meat', 'Steak House'),
    new RestaurantModel("Jackie's Noodles", 'All things Oriental', 'Noodles'),
    new RestaurantModel(
      'Marios Italian Cuisine',
      'All Things Italian',
      'Mario'
    ),
  ];

  getRestaurantArray() {
    return this.restaurantArray.slice();
  }
}
