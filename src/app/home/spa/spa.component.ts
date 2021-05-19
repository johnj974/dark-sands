import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss'],
})
export class SpaComponent implements OnInit {
  //.
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToSpa() {
    this.router.navigate(['spa']);
  }
}
