import { Injectable } from '@angular/core';
import { FoodModel } from '../models/food.model';
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
      'steak',
      [
        new FoodModel('Cajun Calamari', 9),
        new FoodModel('BBQ Wings', 9.5),
        new FoodModel('Nachos', 9),
      ],
      [
        new FoodModel('Rib Eye', 29.95),
        new FoodModel('Steak Sandwich', 19.55),
        new FoodModel('Pork Belly', 19),
      ],
      [
        new FoodModel('Cajun Calamari', 9),
        new FoodModel('BBQ Wings', 9.5),
        new FoodModel('Nachos', 9),
      ]
    ),
    new RestaurantModel(
      "Jackie's Noodles",
      'All things Oriental',
      'Noodles',
      '/assets/images/volcano.jpg',
      'noodle',
      [
        new FoodModel('Seafood Chowder', 9),
        new FoodModel('Superfood Salad', 9.5),
        new FoodModel('Smoked Chicken', 9),
      ],
      [
        new FoodModel('Chicken Thai', 19.5),
        new FoodModel('Vegetarian Thai', 19.5),
        new FoodModel('Smoked Salmon', 9),
      ],
      [
        new FoodModel('Cajun Calamari', 9),
        new FoodModel('BBQ Wings', 9.5),
        new FoodModel('Nachos', 9),
      ]
    ),
    new RestaurantModel(
      'Marios Italian Cuisine',
      'All Things Italian',
      'Mario',
      '/assets/images/volcano.jpg',
      'pizza',
      [
        new FoodModel('Pizza', 9),
        new FoodModel('Olive Cheese', 9.5),
        new FoodModel('Smoked Salmon', 9),
      ],
      [
        new FoodModel('Pizza', 9),
        new FoodModel('Spaghetti', 9.5),
        new FoodModel('', 9),
      ],
      [
        new FoodModel('Cajun Calamari', 9),
        new FoodModel('BBQ Wings', 9.5),
        new FoodModel('Nachos', 9),
      ]
    ),
  ];

  getRestaurantArray() {
    return this.restaurantArray.slice();
  }

  getRestaurant(id) {
    return this.restaurantArray[id];
  }
}
