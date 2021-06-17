import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderModel } from 'src/app/shared/models/order.model';
import { RestaurantModel } from 'src/app/shared/models/restaurant.model';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.scss'],
})
export class PickUpComponent implements OnInit {
  //.
  confirmCheck = false;
  restaurant: RestaurantModel;
  orderForm: FormGroup;
  @Input() receivedParamId: number;
  orderList: OrderModel[] = [];
  orderNumber: number = Math.floor(Math.random() * 10000);
  pickupTime;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurant = this.restaurantService.getRestaurant(
      this.receivedParamId
    );

    this.orderForm = new FormGroup({
      orderName: new FormControl(null, Validators.required),
      orderNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      starterOrder: new FormControl(null),
      mainOrder: new FormControl(null),
      dessertOrder: new FormControl(null),
    });
  }

  placeOrder() {
    let newOrder = this.orderForm.value;
    this.orderList.push(newOrder);
    console.log(this.orderForm.value);
    this.confirmCheck = true;
    this.addThirty();
  }

  confirm() {
    console.log(this.orderList);
    this.confirmCheck = false;
    this.orderForm.reset();
  }

  addThirty() {
    this.pickupTime = new Date();
    this.pickupTime.setMinutes(this.pickupTime.getMinutes() + 30);
    return this.pickupTime;
  }
}
