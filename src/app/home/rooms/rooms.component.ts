import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  //.
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToRoom() {
    this.router.navigate(['rooms']);
  }
}
