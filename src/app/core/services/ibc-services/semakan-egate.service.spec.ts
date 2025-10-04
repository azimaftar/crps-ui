import { TestBed } from '@angular/core/testing';

import { SemakanEgateService } from './semakan-egate.service';

describe('SemakanEgateService', () => {
  let service: SemakanEgateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemakanEgateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
