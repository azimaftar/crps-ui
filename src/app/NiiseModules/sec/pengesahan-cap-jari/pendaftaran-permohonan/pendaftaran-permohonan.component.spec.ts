import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranPermohonanComponent } from './pendaftaran-permohonan.component';

describe('PendaftaranPermohonanComponent', () => {
  let component: PendaftaranPermohonanComponent;
  let fixture: ComponentFixture<PendaftaranPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendaftaranPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendaftaranPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
