import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJenisDokumenPemeriksaanKeluarComponent } from './modal-jenis-dokumen-pemeriksaan-keluar.component';

describe('ModalJenisDokumenPemeriksaanKeluarComponent', () => {
  let component: ModalJenisDokumenPemeriksaanKeluarComponent;
  let fixture: ComponentFixture<ModalJenisDokumenPemeriksaanKeluarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalJenisDokumenPemeriksaanKeluarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalJenisDokumenPemeriksaanKeluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
