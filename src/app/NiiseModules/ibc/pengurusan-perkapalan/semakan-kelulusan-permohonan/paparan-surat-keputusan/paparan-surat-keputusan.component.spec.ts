import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparanSuratKeputusanComponent } from './paparan-surat-keputusan.component';

describe('PaparanSuratKeputusanComponent', () => {
  let component: PaparanSuratKeputusanComponent;
  let fixture: ComponentFixture<PaparanSuratKeputusanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparanSuratKeputusanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparanSuratKeputusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
