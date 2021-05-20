import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: MainGalleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
