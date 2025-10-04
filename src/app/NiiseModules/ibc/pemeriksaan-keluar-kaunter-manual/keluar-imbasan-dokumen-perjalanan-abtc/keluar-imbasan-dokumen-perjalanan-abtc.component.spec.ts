import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeluarImbasanDokumenPerjalananAbtcComponent } from './keluar-imbasan-dokumen-perjalanan-abtc.component';

describe('KeluarImbasanDokumenPerjalananAbtcComponent', () => {
  let component: KeluarImbasanDokumenPerjalananAbtcComponent;
  let fixture: ComponentFixture<KeluarImbasanDokumenPerjalananAbtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeluarImbasanDokumenPerjalananAbtcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeluarImbasanDokumenPerjalananAbtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
