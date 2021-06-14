import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDiningComponent } from './main-dining/main-dining.component';
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component';

const routes: Routes = [
  { path: '', component: MainDiningComponent },
  { path: ':id/:restaurant-name', component: RestaurantHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiningRoutingModule {}
