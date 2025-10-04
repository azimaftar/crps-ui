import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPasIbcComponent } from './maklumat-pas-ibc.component';

describe('MaklumatPasIbcComponent', () => {
  let component: MaklumatPasIbcComponent;
  let fixture: ComponentFixture<MaklumatPasIbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPasIbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPasIbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
