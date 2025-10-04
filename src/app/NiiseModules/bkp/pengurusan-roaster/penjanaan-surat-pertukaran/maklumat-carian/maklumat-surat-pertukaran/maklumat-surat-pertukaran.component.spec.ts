import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatSuratPertukaranComponent } from './maklumat-surat-pertukaran.component';

describe('MaklumatSuratPertukaranComponent', () => {
  let component: MaklumatSuratPertukaranComponent;
  let fixture: ComponentFixture<MaklumatSuratPertukaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatSuratPertukaranComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatSuratPertukaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
