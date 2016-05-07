import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'angular2-phonecat-app',
  templateUrl: 'angular2-phonecat.component.html',
  styleUrls: ['angular2-phonecat.component.css']
})
export class Angular2PhonecatAppComponent {
  query = '';
  title = 'angular2-phonecat works!';
  phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
     'age': 1},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 2},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 3}
  ];
  filteredPhones = this.phones;
  orderProp = 'age';

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
