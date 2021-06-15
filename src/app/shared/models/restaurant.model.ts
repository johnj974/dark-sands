import { FoodModel } from './food.model';

export class RestaurantModel {
  constructor(
    public title: string,
    public description: string,
    public link: string,
    public image: string,
    public style: string,
    public starter: FoodModel[],
    public main: FoodModel[],
    public dessert: FoodModel[]
  ) {}
}
