import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanDanPengesahanKemasukanKelompokComponent } from './semakan-dan-pengesahan-kemasukan-kelompok.component';

describe('SemakanDanPengesahanKemasukanKelompokComponent', () => {
  let component: SemakanDanPengesahanKemasukanKelompokComponent;
  let fixture: ComponentFixture<SemakanDanPengesahanKemasukanKelompokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanDanPengesahanKemasukanKelompokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanDanPengesahanKemasukanKelompokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
