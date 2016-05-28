import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { Checkmark } from './checkmark.pipe';

describe('Checkmark Pipe', () => {
  beforeEachProviders(() => [Checkmark]);

  it('should transform the input', inject([Checkmark], (pipe: Checkmark) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
