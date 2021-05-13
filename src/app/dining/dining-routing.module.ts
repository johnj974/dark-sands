import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDiningComponent } from './main-dining/main-dining.component';

const routes: Routes = [{ path: '', component: MainDiningComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiningRoutingModule {}
