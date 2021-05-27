import { Injectable } from '@angular/core';
import { AttractionModel } from '../models/attraction.model';

@Injectable({
  providedIn: 'root',
})
export class AttractionService {
  //.
  //-kayaking, walking, mountain-biking, sightseeing, cliff-jumping, golf, historical monuments

  attractionArray: AttractionModel[] = [
    new AttractionModel(
      'Wild Atlantic Drive',
      '/assets/images/explore2.jpg',
      'A Drive',
      'drive',
      'outdoor activities'
    ),
    new AttractionModel(
      'Wilderness Walk',
      '/assets/images/church.jpg',
      'A walk',
      'walk',
      'heritage'
    ),
    new AttractionModel(
      'Wild Atlantic Drive',
      '/assets/images/explore2.jpg',
      'A Drive',
      'drive',
      'wild atlantic drive'
    ),
    new AttractionModel(
      'Wilderness Walk',
      '/assets/images/church.jpg',
      'A walk',
      'walk',
      'golf'
    ),
    new AttractionModel(
      'Wild Atlantic Drive',
      '/assets/images/explore2.jpg',
      'A Drive',
      'drive',
      'social'
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
