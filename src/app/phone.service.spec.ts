import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PhoneService } from './phone.service';

describe('Phone Service', () => {
  beforeEachProviders(() => [PhoneService]);

  it('should ...',
      inject([PhoneService], (service: PhoneService) => {
    expect(service).toBeTruthy();
  }));
});
