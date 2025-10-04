import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahkanPendaftaranKakitanganComponent } from './sahkan-pendaftaran-kakitangan.component';

describe('SahkanPendaftaranKakitanganComponent', () => {
  let component: SahkanPendaftaranKakitanganComponent;
  let fixture: ComponentFixture<SahkanPendaftaranKakitanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SahkanPendaftaranKakitanganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SahkanPendaftaranKakitanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
