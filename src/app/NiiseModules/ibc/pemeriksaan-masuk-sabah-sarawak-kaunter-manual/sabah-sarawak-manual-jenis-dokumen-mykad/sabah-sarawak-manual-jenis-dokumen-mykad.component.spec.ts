import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabahSarawakManualJenisDokumenMykadComponent } from './sabah-sarawak-manual-jenis-dokumen-mykad.component';

describe('SabahSarawakManualJenisDokumenMykadComponent', () => {
  let component: SabahSarawakManualJenisDokumenMykadComponent;
  let fixture: ComponentFixture<SabahSarawakManualJenisDokumenMykadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SabahSarawakManualJenisDokumenMykadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabahSarawakManualJenisDokumenMykadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
