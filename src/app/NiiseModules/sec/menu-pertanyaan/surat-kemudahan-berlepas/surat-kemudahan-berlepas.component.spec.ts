import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratKemudahanBerlepasComponent } from './surat-kemudahan-berlepas.component';

describe('SuratKemudahanBerlepasComponent', () => {
  let component: SuratKemudahanBerlepasComponent;
  let fixture: ComponentFixture<SuratKemudahanBerlepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuratKemudahanBerlepasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuratKemudahanBerlepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
