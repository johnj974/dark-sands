import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ActivityModel } from 'src/app/shared/models/activity.model';
import { ActivityService } from 'src/app/shared/services/activity.service';

@Component({
  selector: 'app-attraction-chosen',
  templateUrl: './attraction-chosen.component.html',
  styleUrls: ['./attraction-chosen.component.scss'],
})
export class AttractionChosenComponent implements OnInit {
  //.
  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private router: Router
  ) {}

  retrievedActivity: ActivityModel;
  activityArray: ActivityModel[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params.attraction);
      this.activityArray = this.activityService.onRetrieveArray(
        params.attraction
      );
      this.retrievedActivity = this.activityArray[params.id];
      console.log(this.retrievedActivity);
      console.log(this.activityArray);
    });
  }

  returnToExplore() {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.router.navigate(['/explore', params.id, params.attraction]);
    });
  }
}
