import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatKehilanganDokumenComponent } from './maklumat-kehilangan-dokumen.component';

describe('MaklumatKehilanganDokumenComponent', () => {
  let component: MaklumatKehilanganDokumenComponent;
  let fixture: ComponentFixture<MaklumatKehilanganDokumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatKehilanganDokumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatKehilanganDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
