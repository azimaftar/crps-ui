import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermohonanPasPerkahwinanComponent } from './permohonan-pas-perkahwinan-warga-asing.component';

describe('PermohonanPasPerkahwinanComponent', () => {
  let component: PermohonanPasPerkahwinanComponent;
  let fixture: ComponentFixture<PermohonanPasPerkahwinanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermohonanPasPerkahwinanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermohonanPasPerkahwinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
