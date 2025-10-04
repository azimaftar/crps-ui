import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatMuatNaikDokumenComponent } from './maklumat-muat-naik-dokumen.component';

describe('MaklumatMuatNaikDokumenComponent', () => {
  let component: MaklumatMuatNaikDokumenComponent;
  let fixture: ComponentFixture<MaklumatMuatNaikDokumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatMuatNaikDokumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatMuatNaikDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
