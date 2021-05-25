import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeModel } from 'src/app/shared/models/home.model';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-home-display',
  templateUrl: './home-display.component.html',
  styleUrls: ['./home-display.component.scss'],
})
export class HomeDisplayComponent implements OnInit {
  //.
  homePageArray: HomeModel[] = [];
  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.homePageArray = this.homeService.retrieveHomeArray();
  }

  navigateToPage(link: string) {
    this.router.navigate([`${link}`]);
  }
}
