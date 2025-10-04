import { TestBed } from '@angular/core/testing';

import { MaklumatPengembaraServicesService } from './maklumat-pengembara-services.service';

describe('MaklumatPengembaraServicesService', () => {
  let service: MaklumatPengembaraServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaklumatPengembaraServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
