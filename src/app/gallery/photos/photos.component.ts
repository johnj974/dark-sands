import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/shared/services/gallery.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  //.

  constructor(private galleryService: GalleryService) {}

  photoGallery = [];

  ngOnInit(): void {
    this.photoGallery = this.galleryService.retrievePhotoNames();
  }
}
