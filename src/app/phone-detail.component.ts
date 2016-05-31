import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';
import { Phone } from './phone';
import { PhoneService } from './phone.service';
import { CheckmarkPipe } from './checkmark.pipe';

@Component({
  moduleId: module.id,
  selector: 'phone',
  templateUrl: 'phone-detail.component.html',
  styleUrls: ['phone-detail.component.css'],
  pipes: [CheckmarkPipe]
})
export class PhoneDetailComponent implements OnInit {
  phone: Phone;
  mainImageUrl: string;
  errorMessage: string;

  constructor(
    private routeSegment: RouteSegment,
    private phoneService: PhoneService
  ) { }

  ngOnInit() {
    let id = this.routeSegment.getParam('id');
    this.phoneService.getPhone(id)
                     .subscribe(
                       phone => {
                         this.phone = phone;
                         this.mainImageUrl = phone.images[0];
                       },
                       error => this.errorMessage = <any>error
                     )
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }

}
