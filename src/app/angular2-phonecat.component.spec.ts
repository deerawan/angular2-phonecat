import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2PhonecatAppComponent } from '../app/angular2-phonecat.component';

beforeEachProviders(() => [Angular2PhonecatAppComponent]);

describe('App: Angular2Phonecat', () => {

  it('should create the app',
      inject([Angular2PhonecatAppComponent], (app: Angular2PhonecatAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-phonecat works!\'',
      inject([Angular2PhonecatAppComponent], (app: Angular2PhonecatAppComponent) => {
    expect(app.title).toEqual('angular2-phonecat works!');
  }));

  it('should have phones',
    inject([Angular2PhonecatAppComponent], (app: Angular2PhonecatAppComponent) => {
     expect(app.phones.length).toEqual(3);
     expect(app.filteredPhones.length).toEqual(3);
  }));

  it('should have query',
    inject([Angular2PhonecatAppComponent], (app: Angular2PhonecatAppComponent) => {
      expect(app.query).toEqual('');
  }));

  describe('#search', () => {
    it('should be able to search by name',
      inject([Angular2PhonecatAppComponent], (app: Angular2PhonecatAppComponent) => {
        app.query = 'nexus';
        app.searchPhone();

        expect(app.filteredPhones.length).toEqual(1);
    }));

    it('should be able to search by snippet',
      inject([Angular2PhonecatAppComponent], (app: Angular2PhonecatAppComponent) => {
        app.query = 'tablet';
        app.searchPhone();

        expect(app.filteredPhones.length).toEqual(2);
    }));
  });

  describe('#order', () => {
    it('should has default sort to newest',
      inject([Angular2PhonecatAppComponent], (app: Angular2PhonecatAppComponent) => {
        expect(app.orderProp).toEqual('age');
    }));

    it('should able to sort by newest',
      inject([Angular2PhonecatAppComponent], (app: Angular2PhonecatAppComponent) => {
        var selectEvent = { target: { value: 'age' } };
        app.sortPhone(selectEvent);

        expect(app.filteredPhones[0].name).toEqual('Nexus S');
        expect(app.filteredPhones[1].name).toEqual('Motorola XOOM™ with Wi-Fi');
    }));

    it('should able to sort by name',
      inject([Angular2PhonecatAppComponent], (app: Angular2PhonecatAppComponent) => {
        var selectEvent = { target: { value: 'name' } };
        app.sortPhone(selectEvent);

        expect(app.filteredPhones[0].name).toEqual('MOTOROLA XOOM™');
        expect(app.filteredPhones[1].name).toEqual('Motorola XOOM™ with Wi-Fi');
    }));
  });
});
