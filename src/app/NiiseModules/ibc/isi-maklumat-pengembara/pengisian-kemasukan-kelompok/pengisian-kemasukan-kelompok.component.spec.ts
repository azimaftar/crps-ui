import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengisianKemasukanKelompokComponent } from './pengisian-kemasukan-kelompok.component';

describe('PengisianKemasukanKelompokComponent', () => {
  let component: PengisianKemasukanKelompokComponent;
  let fixture: ComponentFixture<PengisianKemasukanKelompokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengisianKemasukanKelompokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengisianKemasukanKelompokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
