import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabahSarawakManualJenisDokumenLainlainComponent } from './sabah-sarawak-manual-jenis-dokumen-lainlain.component';

describe('SabahSarawakManualJenisDokumenLainlainComponent', () => {
  let component: SabahSarawakManualJenisDokumenLainlainComponent;
  let fixture: ComponentFixture<SabahSarawakManualJenisDokumenLainlainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SabahSarawakManualJenisDokumenLainlainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabahSarawakManualJenisDokumenLainlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
