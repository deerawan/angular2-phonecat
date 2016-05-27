import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS }    from '@angular/http';
import { PhoneService } from './phone.service';
import { Phone } from './phone';

@Component({
  moduleId: module.id,
  selector: 'angular2-phonecat-app',
  templateUrl: 'angular2-phonecat.component.html',
  styleUrls: ['angular2-phonecat.component.css'],
  providers: [
    HTTP_PROVIDERS,
    PhoneService
  ]
})
export class PhoneListComponent implements OnInit {
  query = '';
  title = 'angular2-phonecat works!';
  orderProp = 'age';
  phones: Phone[];
  filteredPhones: Phone[];
  errorMessage: string;

  constructor(private phoneService: PhoneService) {}

  ngOnInit() {
    this.getPhones();
  }

  getPhones() {
    this.phoneService.getPhones()
                     .subscribe(
                       phones => this.phones = this.filteredPhones = phones,
                       error => this.errorMessage = <any>error
                     );
  }

  searchPhone() {
    var newFilteredPhones = [];
    var queryText = this.query.toLowerCase();
    var isFound = false;

    this.phones.forEach(phone => {
      isFound = phone.name.toLowerCase().indexOf(queryText) > -1 ||
        phone.snippet.toLowerCase().indexOf(queryText) > -1
      if (isFound) {
        newFilteredPhones.push(phone);
      };
    });

    this.filteredPhones = newFilteredPhones;
  }

  sortPhone(selectEvent) {
    var newOrderProp = selectEvent.target.value;
    this.orderProp = newOrderProp;

    var newSortedPhones = this.phones.sort((phone1, phone2) => {
      if (phone1[newOrderProp] < phone2[newOrderProp]) {
        return -1;
      }

      if (phone1[newOrderProp] > phone2[newOrderProp]) {
        return 1;
      }

      return 0;
    });

    this.filteredPhones = newSortedPhones;
  }
}
