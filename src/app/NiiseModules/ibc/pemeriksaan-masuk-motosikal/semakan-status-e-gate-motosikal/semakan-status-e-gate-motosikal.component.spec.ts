import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanStatusEGateMotosikalComponent } from './semakan-status-e-gate-motosikal.component';

describe('SemakanStatusEGateMotosikalComponent', () => {
  let component: SemakanStatusEGateMotosikalComponent;
  let fixture: ComponentFixture<SemakanStatusEGateMotosikalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanStatusEGateMotosikalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanStatusEGateMotosikalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
