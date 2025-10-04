import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeluarImbasanDokumenPerjalananPasportComponent } from './keluar-imbasan-dokumen-perjalanan-pasport.component';

describe('KeluarImbasanDokumenPerjalananPasportComponent', () => {
  let component: KeluarImbasanDokumenPerjalananPasportComponent;
  let fixture: ComponentFixture<KeluarImbasanDokumenPerjalananPasportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeluarImbasanDokumenPerjalananPasportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeluarImbasanDokumenPerjalananPasportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
