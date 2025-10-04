import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPenggunaAwamComponent } from './dashboard-pengguna-awam.component';

describe('DashboardPenggunaAwamComponent', () => {
  let component: DashboardPenggunaAwamComponent;
  let fixture: ComponentFixture<DashboardPenggunaAwamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPenggunaAwamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPenggunaAwamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
