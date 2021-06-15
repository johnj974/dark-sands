import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from 'src/app/shared/models/restaurant.model';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.scss'],
})
export class PickUpComponent implements OnInit {
  //.
  restaurant: RestaurantModel;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.envelope.subscribe((id: number) => {
      this.restaurant = this.restaurantService.getRestaurant(id);
      console.log(this.restaurant);
    });
  }
}
