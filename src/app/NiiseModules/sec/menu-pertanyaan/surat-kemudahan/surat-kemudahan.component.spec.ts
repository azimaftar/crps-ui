import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratKemudahanComponent } from './surat-kemudahan.component';

describe('SuratKemudahanComponent', () => {
  let component: SuratKemudahanComponent;
  let fixture: ComponentFixture<SuratKemudahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuratKemudahanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuratKemudahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
