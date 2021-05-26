import { Injectable } from '@angular/core';
import { AttractionModel } from '../models/attraction.model';

@Injectable({
  providedIn: 'root',
})
export class AttractionService {
  //.

  attractionArray: AttractionModel[] = [
    new AttractionModel(
      'Wild Atlantic Drive',
      '/assets/images/explore2.jpg',
      'A Drive',
      'drive',
      'explore'
    ),
    new AttractionModel(
      'Wilderness Walk',
      '/assets/images/church.jpg',
      'A walk',
      'walk',
      'rooms'
    ),
    new AttractionModel(
      'Wild Atlantic Drive',
      '/assets/images/explore2.jpg',
      'A Drive',
      'drive',
      'dining'
    ),
    new AttractionModel(
      'Wilderness Walk',
      '/assets/images/church.jpg',
      'A walk',
      'walk',
      'weddings'
    ),
    new AttractionModel(
      'Wild Atlantic Drive',
      '/assets/images/explore2.jpg',
      'A Drive',
      'drive',
      'spa'
    ),
    new AttractionModel(
      'Wilderness Walk',
      '/assets/images/church.jpg',
      'A walk',
      'walk',
      'business'
    ),
  ];
  constructor() {}

  retrieveAttractionArray() {
    return this.attractionArray.slice();
  }
}
