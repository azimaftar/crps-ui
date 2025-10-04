import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanPendaftaranKawalanComponent } from './pengurusan-pendaftaran-kawalan.component';

describe('PengurusanPendaftaranKawalanComponent', () => {
  let component: PengurusanPendaftaranKawalanComponent;
  let fixture: ComponentFixture<PengurusanPendaftaranKawalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengurusanPendaftaranKawalanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengurusanPendaftaranKawalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
