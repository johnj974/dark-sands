import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  //.

  reservationForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.reservationForm = new FormGroup({
      bookingName: new FormControl(null, Validators.required),
      bookingTime: new FormControl(null, Validators.required),
      bookingNumber: new FormControl(null, Validators.required),
      bookingContact: new FormControl(null, Validators.required),
    });
  }

  makeReservation() {
    console.log(this.reservationForm.value);
  }
}
