import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantModel } from 'src/app/shared/models/restaurant.model';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
  //.
  constructor(
    private restaurantService: RestaurantService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getRestaurantArray();
  }

  restaurants: RestaurantModel[] = [];

  toRestaurant(id: number, name: string) {
    const restaurantName = name.replace(/ /g, '');
    this.router.navigate([id, restaurantName], { relativeTo: this.route });
    this.restaurantService.envelope.next(id);
  }
}
