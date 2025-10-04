import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuatNaikDokumenComponent } from './muat-naik-dokumen.component';

describe('MuatNaikDokumenComponent', () => {
  let component: MuatNaikDokumenComponent;
  let fixture: ComponentFixture<MuatNaikDokumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuatNaikDokumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuatNaikDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
