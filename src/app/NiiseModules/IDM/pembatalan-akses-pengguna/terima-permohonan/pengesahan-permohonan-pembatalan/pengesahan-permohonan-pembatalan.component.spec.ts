import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermohonanPegawaiBantuanComponent } from './pengesahan-permohonan-pembatalan.component';

describe('PermohonanTambahPerananComponent', () => {
  let component: PermohonanPegawaiBantuanComponent;
  let fixture: ComponentFixture<PermohonanPegawaiBantuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermohonanPegawaiBantuanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermohonanPegawaiBantuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
