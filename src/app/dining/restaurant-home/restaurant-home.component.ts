import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RestaurantModel } from 'src/app/shared/models/restaurant.model';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.scss'],
})
export class RestaurantHomeComponent implements OnInit {
  //.

  requestedRestaurant: RestaurantModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.requestedRestaurant = this.restaurantService.getRestaurant(
        params.id
      );
    });
  }

  backToRestaurant() {
    this.router.navigate(['/dining']);
  }
}
