import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranIdPenggunaAgensiComponent } from './pendaftaran-id-pengguna-agensi.component';

describe('PendaftaranIdPenggunaAgensiComponent', () => {
  let component: PendaftaranIdPenggunaAgensiComponent;
  let fixture: ComponentFixture<PendaftaranIdPenggunaAgensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendaftaranIdPenggunaAgensiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendaftaranIdPenggunaAgensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
