import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatAkaunBankComponent } from './maklumat-akaun-bank.component';

describe('MaklumatAkaunBankComponent', () => {
  let component: MaklumatAkaunBankComponent;
  let fixture: ComponentFixture<MaklumatAkaunBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatAkaunBankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatAkaunBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
