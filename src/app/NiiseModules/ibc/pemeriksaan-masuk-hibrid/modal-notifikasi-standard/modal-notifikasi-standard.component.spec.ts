import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotifikasiStandardComponent } from './modal-notifikasi-standard.component';

describe('ModalNotifikasiStandardComponent', () => {
  let component: ModalNotifikasiStandardComponent;
  let fixture: ComponentFixture<ModalNotifikasiStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNotifikasiStandardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNotifikasiStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
