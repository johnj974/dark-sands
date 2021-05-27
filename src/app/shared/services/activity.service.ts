import { Injectable } from '@angular/core';
import { ActivityModel } from '../models/activity.model';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  //.
  constructor() {}

  outdoorArray: ActivityModel[] = [
    new ActivityModel(
      'Kayaking',
      'Kayak in a kayak',
      '/assets/images/kayak.jpg'
    ),
    new ActivityModel(
      'Hill Walking',
      'Climb a hill',
      '/assets/images/explore2.jpg'
    ),
  ];
  heritageArray: ActivityModel[] = [
    new ActivityModel(
      'Ancient Church',
      'Visit the old church',
      '/assets/images/church.jpg'
    ),
    new ActivityModel(
      'Monastery',
      'Visit the monastery',
      '/assets/images/monastery.jpg'
    ),
  ];
  golfArray: ActivityModel[] = [
    new ActivityModel(
      'Hogs Head',
      'Links Golf Course',
      '/assets/images/golf.jpg'
    ),
    new ActivityModel(
      'Baile Ui Thaidgh',
      'Ancient Course',
      '/assets/images/golf2.jpg'
    ),
  ];
  socialArray: ActivityModel[] = [
    new ActivityModel(
      'Puck Fair',
      'An old Fair',
      '/assets/images/monastery.jpg'
    ),
    new ActivityModel(
      'Pattern Day',
      'An gathering of fanatics',
      '/assets/images/kayak.jpg'
    ),
  ];
  coastalArray: ActivityModel[] = [
    new ActivityModel(
      'Loop Head',
      'Exposed LightHouse',
      '/assets/images/monastery.jpg'
    ),
    new ActivityModel(
      'Vintage Tour',
      'Big Cliffs',
      '/assets/images/vintage.jpg'
    ),
  ];

  volcanoArray: ActivityModel[] = [
    new ActivityModel(
      'Big Volcano',
      'A big fiery volcano',
      '/assets/images/church.jpg'
    ),
    new ActivityModel(
      'Bigger Volcano',
      'A bigger fiery volcano',
      '/assets/images/kayak.jpg'
    ),
  ];

  onRetrieveArray(name: string) {
    if (name === 'outdooractivities') {
      return this.outdoorArray.slice();
    }
    if (name === 'heritage') {
      return this.heritageArray.slice();
    }
    if (name === 'golf') {
      return this.golfArray.slice();
    }
    if (name === 'social') {
      return this.socialArray.slice();
    }
    if (name === 'coastaldrive') {
      return this.coastalArray.slice();
    }
    if (name === 'volcanotour') {
      return this.volcanoArray.slice();
    }
  }
}
