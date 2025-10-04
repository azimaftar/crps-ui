import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatBankGuaranteeSecurityBonComponent } from './maklumat-bank-guarantee-security-bon.component';

describe('MaklumatBankGuaranteeSecurityBonComponent', () => {
  let component: MaklumatBankGuaranteeSecurityBonComponent;
  let fixture: ComponentFixture<MaklumatBankGuaranteeSecurityBonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatBankGuaranteeSecurityBonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatBankGuaranteeSecurityBonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
