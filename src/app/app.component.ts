import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //.

  constructor(private route: ActivatedRoute, private router: Router) {}

  title = 'dark-sands';
  allow = true;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      console.log(this.router.url);
      this.router.events.subscribe((data) => {
        console.log(data);
      });
    });
  }
}
