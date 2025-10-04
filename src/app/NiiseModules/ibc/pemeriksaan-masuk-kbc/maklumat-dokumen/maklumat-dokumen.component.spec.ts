import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatDokumenComponent } from './maklumat-dokumen.component';

describe('MaklumatDokumenComponent', () => {
  let component: MaklumatDokumenComponent;
  let fixture: ComponentFixture<MaklumatDokumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatDokumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
