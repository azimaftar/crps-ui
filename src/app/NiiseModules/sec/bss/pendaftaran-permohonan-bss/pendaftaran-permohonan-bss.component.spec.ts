import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranPermohonanBssComponent } from './pendaftaran-permohonan-bss.component';

describe('PendaftaranPermohonanBssComponent', () => {
  let component: PendaftaranPermohonanBssComponent;
  let fixture: ComponentFixture<PendaftaranPermohonanBssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendaftaranPermohonanBssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendaftaranPermohonanBssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
