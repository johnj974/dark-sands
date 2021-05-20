import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { PhotosComponent } from './photos/photos.component';


@NgModule({
  declarations: [
    MainGalleryComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
