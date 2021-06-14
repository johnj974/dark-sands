import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.scss'],
})
export class RestaurantHomeComponent implements OnInit {
  //.
  constructor(private router: Router) {}

  ngOnInit(): void {}

  backToRestaurant() {
    this.router.navigate(['/dining']);
  }
}
