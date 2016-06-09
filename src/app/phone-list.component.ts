import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS }    from '@angular/http';
import { Router } from '@angular/router';
import { PhoneService } from './phone.service';
import { Phone } from './phone';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'phone-list',
  templateUrl: 'phone-list.component.html',
  styleUrls: ['phone-list.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES
  ]
})
export class PhoneListComponent implements OnInit {
  query = '';
  orderProp = 'age';
  phones: Phone[];
  selectedPhone: Phone;
  filteredPhones: Phone[];
  errorMessage: string;

  constructor(
    private phoneService: PhoneService,
    private router: Router
  ) {}

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

  goToDetail(phone: Phone) {
    let link = ['/phone', phone.id];
    this.router.navigate(link);
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
