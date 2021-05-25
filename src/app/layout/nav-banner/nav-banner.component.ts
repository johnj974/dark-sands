import { Component, OnInit } from '@angular/core';
import { HomeModel } from 'src/app/shared/models/home.model';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-nav-banner',
  templateUrl: './nav-banner.component.html',
  styleUrls: ['./nav-banner.component.scss']
})
export class NavBannerComponent implements OnInit {
  //.

  navBannerArray: HomeModel[] = []

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.navBannerArray = this.homeService.retrieveHomeArray();
  }

}
