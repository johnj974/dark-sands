import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiningRoutingModule } from './dining-routing.module';
import { MainDiningComponent } from './main-dining/main-dining.component';
import { LayoutModule } from '../layout/layout.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';

@NgModule({
  declarations: [MainDiningComponent, RestaurantsComponent],
  imports: [CommonModule, DiningRoutingModule, LayoutModule],
})
export class DiningModule {}
