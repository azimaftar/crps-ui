import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jadual2Syif3KumpulanComponent } from './jadual2-syif3-kumpulan.component';

describe('Jadual2Syif3KumpulanComponent', () => {
  let component: Jadual2Syif3KumpulanComponent;
  let fixture: ComponentFixture<Jadual2Syif3KumpulanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jadual2Syif3KumpulanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jadual2Syif3KumpulanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
