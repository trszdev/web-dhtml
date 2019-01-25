import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isSubmenuActive: Boolean

  ngOnInit() { }

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.isSubmenuActive = this.router.url.includes('/pay/');
    })
  }
}
