import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatKontrakSewaanPejabatComponent } from './maklumat-kontrak-sewaan-pejabat.component';

describe('MaklumatKontrakSewaanPejabatComponent', () => {
  let component: MaklumatKontrakSewaanPejabatComponent;
  let fixture: ComponentFixture<MaklumatKontrakSewaanPejabatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatKontrakSewaanPejabatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatKontrakSewaanPejabatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
