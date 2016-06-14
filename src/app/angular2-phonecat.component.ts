import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS }    from '@angular/http';
import { PhoneService } from './shared/phone.service';
import { Phone } from './shared/phone.model';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Routes([
  { path: '/phones', component: PhoneListComponent },
  { path: '/phone/:id', component: PhoneDetailComponent }
])

@Component({
  moduleId: module.id,
  selector: 'angular2-phonecat-app',
  templateUrl: 'angular2-phonecat.component.html',
  styleUrls: ['angular2-phonecat.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES
  ],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    PhoneService
  ]
})

export class Angular2PhonecatAppComponent implements OnInit {
  title = 'Angular 2 PhoneCat';

  constructor(
    private phoneService: PhoneService,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.navigate(['/phones']);
  }
}
