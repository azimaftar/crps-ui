import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeluarImbasanKompleksDokumenPerjalananPasportComponent } from './keluar-imbasan-kompleks-dokumen-perjalanan-pasport.component';

describe('KeluarImbasanKompleksDokumenPerjalananPasportComponent', () => {
  let component: KeluarImbasanKompleksDokumenPerjalananPasportComponent;
  let fixture: ComponentFixture<KeluarImbasanKompleksDokumenPerjalananPasportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeluarImbasanKompleksDokumenPerjalananPasportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeluarImbasanKompleksDokumenPerjalananPasportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
