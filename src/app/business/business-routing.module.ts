import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBusinessComponent } from './main-business/main-business.component';

const routes: Routes = [
  {
    path: '',
    component: MainBusinessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
