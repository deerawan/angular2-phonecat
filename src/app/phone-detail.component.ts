import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'phone',
  template: '<h2>Phone Detail</h2>'
})
export class PhoneDetailComponent implements OnInit {
  constructor(
    private routeSegment: RouteSegment
  ) { }

  ngOnInit() {
    let id = this.routeSegment.getParam('id');
    console.log('id', id);
  }

}
