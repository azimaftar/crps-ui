import { TestBed } from '@angular/core/testing';

import { PengurusanRosterGeotimeService } from './pengurusan-roster-geotime.service';

describe('PengurusanRosterGeotimeService', () => {
  let service: PengurusanRosterGeotimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PengurusanRosterGeotimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
