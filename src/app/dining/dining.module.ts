import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiningRoutingModule } from './dining-routing.module';
import { MainDiningComponent } from './main-dining/main-dining.component';
import { LayoutModule } from '../layout/layout.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation/reservation.component';
import { PickUpComponent } from './pick-up/pick-up.component';

@NgModule({
  declarations: [
    MainDiningComponent,
    RestaurantsComponent,
    RestaurantHomeComponent,
    ReservationComponent,
    PickUpComponent,
  ],
  imports: [
    CommonModule,
    DiningRoutingModule,
    LayoutModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class DiningModule {}
