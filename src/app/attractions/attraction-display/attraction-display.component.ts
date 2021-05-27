import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ActivityModel } from 'src/app/shared/models/activity.model';
import { AttractionModel } from 'src/app/shared/models/attraction.model';
import { ActivityService } from 'src/app/shared/services/activity.service';
import { AttractionService } from 'src/app/shared/services/attraction.service';

@Component({
  selector: 'app-attraction-display',
  templateUrl: './attraction-display.component.html',
  styleUrls: ['./attraction-display.component.scss'],
})
export class AttractionDisplayComponent implements OnInit {
  //.
  attractionArray: AttractionModel[] = [];
  chosenAttraction: AttractionModel;
  activeAttraction: ActivityModel[] = [];
  constructor(
    private attractionServive: AttractionService,
    private activityService: ActivityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.attractionArray = this.attractionServive.retrieveAttractionArray();
    this.route.params.subscribe((params: Params) => {
      this.chosenAttraction = this.attractionArray[params.id];
      console.log(params.attraction);
      this.activeAttraction = this.activityService.onRetrieveArray(
        params.attraction
      );
    });
  }

  navigate(id: number, name: string) {
    const attractionName = name.replace(/ /g, '');
    this.router.navigate(['explore', id, attractionName]);
  }

  toActivity(id: number, name: string) {
    const activityName = name.replace(/ /g, '');
    this.router.navigate([id, activityName], { relativeTo: this.route });
  }
}
