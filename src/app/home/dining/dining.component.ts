import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.scss'],
})
export class DiningComponent implements OnInit {
  //.
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToDining() {
    this.router.navigate(['dining']);
  }
}
