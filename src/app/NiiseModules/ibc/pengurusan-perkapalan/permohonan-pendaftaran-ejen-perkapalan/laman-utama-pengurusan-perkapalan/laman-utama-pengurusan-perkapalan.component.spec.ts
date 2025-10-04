import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamanUtamaPengurusanPerkapalanComponent } from './laman-utama-pengurusan-perkapalan.component';

describe('LamanUtamaPengurusanPerkapalanComponent', () => {
  let component: LamanUtamaPengurusanPerkapalanComponent;
  let fixture: ComponentFixture<LamanUtamaPengurusanPerkapalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LamanUtamaPengurusanPerkapalanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamanUtamaPengurusanPerkapalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
