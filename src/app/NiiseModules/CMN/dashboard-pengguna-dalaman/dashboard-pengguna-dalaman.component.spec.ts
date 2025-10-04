import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPenggunaDalamanComponent } from './dashboard-pengguna-dalaman.component';

describe('DashboardPenggunaDalamanComponent', () => {
  let component: DashboardPenggunaDalamanComponent;
  let fixture: ComponentFixture<DashboardPenggunaDalamanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPenggunaDalamanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPenggunaDalamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
