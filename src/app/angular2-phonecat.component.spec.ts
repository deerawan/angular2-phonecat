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
});
