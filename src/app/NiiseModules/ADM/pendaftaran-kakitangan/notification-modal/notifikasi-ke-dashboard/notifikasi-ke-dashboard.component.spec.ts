import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifikasiKeDashboardComponent } from './notifikasi-ke-dashboard.component';

describe('NotifikasiKeDashboardComponent', () => {
  let component: NotifikasiKeDashboardComponent;
  let fixture: ComponentFixture<NotifikasiKeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifikasiKeDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifikasiKeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
