import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantModel } from 'src/app/shared/models/restaurant.model';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  //.
  reservation = false;
  @Input() receivedParamId: number;
  restaurant: RestaurantModel;
  reservationForm: FormGroup;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.reservationForm = new FormGroup({
      bookingName: new FormControl(null, Validators.required),
      bookingTime: new FormControl(null, Validators.required),
      bookingDate: new FormControl(null, Validators.required),
      bookingNumber: new FormControl(null, [
        Validators.required,
        Validators.max(4),
      ]),
      bookingContact: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
    });
    this.restaurant = this.restaurantService.getRestaurant(
      this.receivedParamId
    );
  }

  makeReservation() {
    console.log(this.reservationForm.value);
    this.reservation = true;
    setTimeout(() => {
      this.reservation = false;
      this.reservationForm.reset();
    }, 10000);
  }
}
