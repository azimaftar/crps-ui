import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranKakitanganComponent } from './pendaftaran-kakitangan.component';

describe('PendaftaranKakitanganComponent', () => {
  let component: PendaftaranKakitanganComponent;
  let fixture: ComponentFixture<PendaftaranKakitanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendaftaranKakitanganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendaftaranKakitanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
