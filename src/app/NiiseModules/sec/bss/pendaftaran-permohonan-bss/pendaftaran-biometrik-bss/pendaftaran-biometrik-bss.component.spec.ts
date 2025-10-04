import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranBiometrikBssComponent } from './pendaftaran-biometrik-bss.component';

describe('PendaftaranBiometrikBssComponent', () => {
  let component: PendaftaranBiometrikBssComponent;
  let fixture: ComponentFixture<PendaftaranBiometrikBssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendaftaranBiometrikBssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendaftaranBiometrikBssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
