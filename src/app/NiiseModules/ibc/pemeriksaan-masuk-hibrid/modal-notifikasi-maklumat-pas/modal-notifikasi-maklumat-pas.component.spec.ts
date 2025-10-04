import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotifikasiMaklumatPasComponent } from './modal-notifikasi-maklumat-pas.component';

describe('ModalNotifikasiMaklumatPasComponent', () => {
  let component: ModalNotifikasiMaklumatPasComponent;
  let fixture: ComponentFixture<ModalNotifikasiMaklumatPasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNotifikasiMaklumatPasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNotifikasiMaklumatPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
