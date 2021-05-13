import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'attractions',
    loadChildren: () =>
      import('./attractions/attractions.module').then(
        (m) => m.AttractionsModule
      ),
  },
  {
    path: 'business',
    loadChildren: () =>
      import('./business/business.module').then((m) => m.BusinessModule),
  },
  {
    path: 'dining',
    loadChildren: () =>
      import('./dining/dining.module').then((m) => m.DiningModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'spa',
    loadChildren: () => import('./spa/spa.module').then((m) => m.SpaModule),
  },
  {
    path: 'weddings',
    loadChildren: () =>
      import('./weddings/weddings.module').then((m) => m.WeddingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
