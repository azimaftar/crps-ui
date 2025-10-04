import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenjanaanSuratPertukaranComponent } from './penjanaan-surat-pertukaran.component';

describe('PenjanaanSuratPertukaranComponent', () => {
  let component: PenjanaanSuratPertukaranComponent;
  let fixture: ComponentFixture<PenjanaanSuratPertukaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenjanaanSuratPertukaranComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenjanaanSuratPertukaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
