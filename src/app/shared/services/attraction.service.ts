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
      '/assets/images/hills.jpg',
      'A Drive',
      'drive',
      'outdoor activities'
    ),
    new AttractionModel(
      'Wilderness Walk',
      '/assets/images/castle.jpg',
      'A walk',
      'walk',
      'heritage'
    ),
    new AttractionModel(
      'Wild Atlantic Drive',
      '/assets/images/coast.jpg',
      'A Drive',
      'drive',
      'coastal drive'
    ),
    new AttractionModel(
      'Wilderness Walk',
      '/assets/images/golf3.jpg',
      'A walk',
      'walk',
      'golf'
    ),
    new AttractionModel(
      'Wild Atlantic Drive',
      '/assets/images/dining.jpg',
      'A Drive',
      'drive',
      'social'
    ),
    new AttractionModel(
      'Wilderness Walk',
      '/assets/images/volcano.jpg',
      'A walk',
      'walk',
      'volcano tour'
    ),
  ];
  constructor() {}

  retrieveAttractionArray() {
    return this.attractionArray.slice();
  }
}
