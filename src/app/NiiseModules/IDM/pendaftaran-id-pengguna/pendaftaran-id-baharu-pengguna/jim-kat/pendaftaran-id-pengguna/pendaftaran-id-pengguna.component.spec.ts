import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranIdPenggunaComponent } from './pendaftaran-id-pengguna.component';

describe('PendaftaranIdPenggunaComponent', () => {
  let component: PendaftaranIdPenggunaComponent;
  let fixture: ComponentFixture<PendaftaranIdPenggunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendaftaranIdPenggunaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendaftaranIdPenggunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
