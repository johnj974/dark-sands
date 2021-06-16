import { Component, OnInit } from '@angular/core';
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

  reservationForm: FormGroup;

  constructor() {}

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
  }

  makeReservation() {
    console.log(this.reservationForm.value);
    this.reservationForm.reset();
  }
}
