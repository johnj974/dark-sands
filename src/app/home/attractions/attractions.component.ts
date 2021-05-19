import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss'],
})
export class AttractionsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToAttractions() {
    this.router.navigate(['attractions']);
  }
}
