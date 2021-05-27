import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AttractionModel } from 'src/app/shared/models/attraction.model';
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
  constructor(
    private attractionServive: AttractionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.attractionArray = this.attractionServive.retrieveAttractionArray();
    this.route.params.subscribe((params: Params) => {
      this.chosenAttraction = this.attractionArray[params.id];
    });
  }
}
