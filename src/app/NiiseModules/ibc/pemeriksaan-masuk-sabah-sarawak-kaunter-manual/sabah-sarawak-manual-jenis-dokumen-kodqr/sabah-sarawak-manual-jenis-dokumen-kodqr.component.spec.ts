import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabahSarawakManualJenisDokumenKodqrComponent } from './sabah-sarawak-manual-jenis-dokumen-kodqr.component';

describe('SabahSarawakManualJenisDokumenKodqrComponent', () => {
  let component: SabahSarawakManualJenisDokumenKodqrComponent;
  let fixture: ComponentFixture<SabahSarawakManualJenisDokumenKodqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SabahSarawakManualJenisDokumenKodqrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabahSarawakManualJenisDokumenKodqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
