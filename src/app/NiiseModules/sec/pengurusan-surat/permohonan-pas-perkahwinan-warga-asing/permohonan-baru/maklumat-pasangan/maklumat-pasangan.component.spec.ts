import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPasanganComponent } from './maklumat-pasangan.component';

describe('MaklumatPasanganComponent', () => {
  let component: MaklumatPasanganComponent;
  let fixture: ComponentFixture<MaklumatPasanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPasanganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPasanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
