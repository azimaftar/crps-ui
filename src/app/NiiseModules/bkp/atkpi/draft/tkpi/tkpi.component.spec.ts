import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TKPIComponent } from './tkpi.component';

describe('TKPIComponent', () => {
  let component: TKPIComponent;
  let fixture: ComponentFixture<TKPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TKPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TKPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
