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
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
  filteredPhones = this.phones;

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
}
