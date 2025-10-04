import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanDokumenAbtcComponent } from './imbasan-dokumen-abtc.component';

describe('ImbasanDokumenAbtcComponent', () => {
  let component: ImbasanDokumenAbtcComponent;
  let fixture: ComponentFixture<ImbasanDokumenAbtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanDokumenAbtcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanDokumenAbtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
