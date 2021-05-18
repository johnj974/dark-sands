import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContactComponent } from './main-contact/main-contact.component';

const routes: Routes = [
  {
    path: '',
    component: MainContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
