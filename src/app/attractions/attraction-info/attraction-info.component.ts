import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttractionModel } from 'src/app/shared/models/attraction.model';
import { AttractionService } from 'src/app/shared/services/attraction.service';

@Component({
  selector: 'app-attraction-info',
  templateUrl: './attraction-info.component.html',
  styleUrls: ['./attraction-info.component.scss'],
})
export class AttractionInfoComponent implements OnInit {
  //.

  attractionArray: AttractionModel[] = [];

  constructor(
    private attractionService: AttractionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.attractionArray = this.attractionService.retrieveAttractionArray();
  }

  navigate(id: number, name: string) {
    const attractionName = name.replace(/ /g, '');
    this.router.navigate(['explore', id, attractionName]);
  }
}
