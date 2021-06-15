import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiningRoutingModule } from './dining-routing.module';
import { MainDiningComponent } from './main-dining/main-dining.component';
import { LayoutModule } from '../layout/layout.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainDiningComponent,
    RestaurantsComponent,
    RestaurantHomeComponent,
    FormsComponent,
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
