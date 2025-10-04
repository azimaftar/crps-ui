import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPenggunaAgensiComponent } from './dashboard-pengguna-agensi.component';

describe('DashboardPenggunaAgensiComponent', () => {
  let component: DashboardPenggunaAgensiComponent;
  let fixture: ComponentFixture<DashboardPenggunaAgensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPenggunaAgensiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPenggunaAgensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
