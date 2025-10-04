import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPendaftaranIdBaharuComponent } from './dashboard-pendaftaran-id-baharu.component';

describe('DashboardPendaftaranIdBaharuComponent', () => {
  let component: DashboardPendaftaranIdBaharuComponent;
  let fixture: ComponentFixture<DashboardPendaftaranIdBaharuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPendaftaranIdBaharuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPendaftaranIdBaharuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
