import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSenaraiArahanPemulanganKadKuasaComponent } from './dashboard-senarai-arahan-pemulangan-kad-kuasa.component';

describe('DashboardSenaraiArahanPemulanganKadKuasaComponent', () => {
  let component: DashboardSenaraiArahanPemulanganKadKuasaComponent;
  let fixture: ComponentFixture<DashboardSenaraiArahanPemulanganKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSenaraiArahanPemulanganKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSenaraiArahanPemulanganKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
