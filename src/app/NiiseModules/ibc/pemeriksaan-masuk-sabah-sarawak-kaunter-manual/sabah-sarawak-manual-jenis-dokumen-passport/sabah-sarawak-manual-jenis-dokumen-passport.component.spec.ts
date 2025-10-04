import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabahSarawakManualJenisDokumenPassportComponent } from './sabah-sarawak-manual-jenis-dokumen-passport.component';

describe('SabahSarawakManualJenisDokumenPassportComponent', () => {
  let component: SabahSarawakManualJenisDokumenPassportComponent;
  let fixture: ComponentFixture<SabahSarawakManualJenisDokumenPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SabahSarawakManualJenisDokumenPassportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabahSarawakManualJenisDokumenPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
