import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPermohonanUntukKegunaanPejabatComponent } from './maklumat-permohonan-untuk-kegunaan-pejabat.component';

describe('MaklumatPermohonanUntukKegunaanPejabatComponent', () => {
  let component: MaklumatPermohonanUntukKegunaanPejabatComponent;
  let fixture: ComponentFixture<MaklumatPermohonanUntukKegunaanPejabatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPermohonanUntukKegunaanPejabatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPermohonanUntukKegunaanPejabatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
