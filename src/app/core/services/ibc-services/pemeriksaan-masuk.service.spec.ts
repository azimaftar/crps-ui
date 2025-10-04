import { TestBed } from '@angular/core/testing';

import { PemeriksaanMasukService } from './pemeriksaan-masuk.service';

describe('PemeriksaanMasukService', () => {
  let service: PemeriksaanMasukService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemeriksaanMasukService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
