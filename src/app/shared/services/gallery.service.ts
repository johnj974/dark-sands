import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  //.

  constructor() {}

  photoNames: string[] = [
    'vintage',
    'hills',
    'kayak',
    'golf',
    'dining',
    'room',
    'spa',
    'explore',
    'explore2',
    'wedding',
    'golf2',
    'church',
    'castle',
    'ring',
    'room2',
    'business',
    'golf3',
  ];

  retrievePhotoNames() {
    return this.photoNames.slice();
  }
}
