import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss'],
})
export class WeddingComponent implements OnInit {
  //.
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToWeddings() {
    this.router.navigate(['weddings']);
  }
}
