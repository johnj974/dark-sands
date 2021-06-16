import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  orderForm: FormGroup;
  @Input() receivedParamId: number;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurant = this.restaurantService.getRestaurant(
      this.receivedParamId
    );

    this.orderForm = new FormGroup({
      name: new FormControl(null),
    });

    console.log(this.receivedParamId);
  }
}
