import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatVisaIbcComponent } from './maklumat-visa-ibc.component';

describe('MaklumatVisaIbcComponent', () => {
  let component: MaklumatVisaIbcComponent;
  let fixture: ComponentFixture<MaklumatVisaIbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatVisaIbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatVisaIbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
