import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { CheckmarkPipe } from './checkmark.pipe';

describe('Checkmark Pipe', () => {
  beforeEachProviders(() => [CheckmarkPipe]);

  it('should transform the input', inject([CheckmarkPipe], (pipe: CheckmarkPipe) => {
  }));
});
