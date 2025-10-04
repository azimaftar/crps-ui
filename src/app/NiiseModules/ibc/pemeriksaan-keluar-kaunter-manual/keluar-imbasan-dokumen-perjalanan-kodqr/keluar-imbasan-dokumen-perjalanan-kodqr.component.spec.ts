import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeluarImbasanDokumenPerjalananKodqrComponent } from './keluar-imbasan-dokumen-perjalanan-kodqr.component';

describe('KeluarImbasanDokumenPerjalananKodqrComponent', () => {
  let component: KeluarImbasanDokumenPerjalananKodqrComponent;
  let fixture: ComponentFixture<KeluarImbasanDokumenPerjalananKodqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeluarImbasanDokumenPerjalananKodqrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeluarImbasanDokumenPerjalananKodqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
