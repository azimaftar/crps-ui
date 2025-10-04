import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuluskanPendaftaranKakitanganComponent } from './luluskan-pendaftaran-kakitangan.component';

describe('LuluskanPendaftaranKakitanganComponent', () => {
  let component: LuluskanPendaftaranKakitanganComponent;
  let fixture: ComponentFixture<LuluskanPendaftaranKakitanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuluskanPendaftaranKakitanganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuluskanPendaftaranKakitanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
