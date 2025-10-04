import { TestBed } from '@angular/core/testing';

import { BiometrikModalService } from './biometrik-modal.service';

describe('BiometrikModalService', () => {
  let service: BiometrikModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiometrikModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
