import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent implements OnInit {
  //.
  constructor(private router: Router) {}
  ngOnInit(): void {}

  navigateToBusiness() {
    this.router.navigate(['business']);
  }
}