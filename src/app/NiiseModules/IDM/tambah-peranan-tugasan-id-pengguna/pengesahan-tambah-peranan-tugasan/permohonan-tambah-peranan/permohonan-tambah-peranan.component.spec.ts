import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermohonanTambahPerananComponent } from './permohonan-tambah-peranan.component';

describe('PermohonanTambahPerananComponent', () => {
  let component: PermohonanTambahPerananComponent;
  let fixture: ComponentFixture<PermohonanTambahPerananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermohonanTambahPerananComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermohonanTambahPerananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
