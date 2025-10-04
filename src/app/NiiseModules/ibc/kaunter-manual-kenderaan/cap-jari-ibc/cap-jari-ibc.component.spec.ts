import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapJariIbcComponent } from './cap-jari-ibc.component';

describe('CapJariIbcComponent', () => {
  let component: CapJariIbcComponent;
  let fixture: ComponentFixture<CapJariIbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapJariIbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapJariIbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
