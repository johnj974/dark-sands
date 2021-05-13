import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWeddingComponent } from './main-wedding/main-wedding.component';

const routes: Routes = [
  {
    path: '',
    component: MainWeddingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeddingsRoutingModule {}
