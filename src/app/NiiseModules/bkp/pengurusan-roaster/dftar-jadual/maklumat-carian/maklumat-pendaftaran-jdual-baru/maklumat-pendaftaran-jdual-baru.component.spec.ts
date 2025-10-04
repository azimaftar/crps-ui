import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPendaftaranJdualBaruComponent } from './maklumat-pendaftaran-jdual-baru.component';

describe('MaklumatPendaftaranJdualBaruComponent', () => {
  let component: MaklumatPendaftaranJdualBaruComponent;
  let fixture: ComponentFixture<MaklumatPendaftaranJdualBaruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPendaftaranJdualBaruComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPendaftaranJdualBaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
