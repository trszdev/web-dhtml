import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (!(event instanceof NavigationEnd)) return;
      const snapshot = this.activatedRoute.firstChild.snapshot;
      const title = `Магазин - ${snapshot.data ? snapshot.data.title : ''}`;
      this.titleService.setTitle(title);
    });
  }
}
