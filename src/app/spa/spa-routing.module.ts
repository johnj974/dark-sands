import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSpaComponent } from './main-spa/main-spa.component';

const routes: Routes = [
  {
    path: '',
    component: MainSpaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaRoutingModule {}
