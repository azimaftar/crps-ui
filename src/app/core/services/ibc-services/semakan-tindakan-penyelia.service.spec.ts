import { TestBed } from '@angular/core/testing';

import { SemakanTindakanPenyeliaService } from './semakan-tindakan-penyelia.service';

describe('SemakanTindakanPenyeliaService', () => {
  let service: SemakanTindakanPenyeliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemakanTindakanPenyeliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
