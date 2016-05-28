import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';
import { Phone } from './phone';
import { PhoneService } from './phone.service';

@Component({
  moduleId: module.id,
  selector: 'phone',
  templateUrl: 'phone-detail.component.html',
  styleUrls: ['phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
  phone: Phone;
  errorMessage: string;

  constructor(
    private routeSegment: RouteSegment,
    private phoneService: PhoneService
  ) { }

  ngOnInit() {
    let id = this.routeSegment.getParam('id');
    console.log('id', id);
    this.phoneService.getPhone(id)
                     .subscribe(
                       phone => this.phone = phone,
                       error => this.errorMessage = <any>error
                     )
  }

}
