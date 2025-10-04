import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumenTidakDapatDimuatNaikComponent } from './dokumen-tidak-dapat-dimuat-naik.component';

describe('DokumenTidakDapatDimuatNaikComponent', () => {
  let component: DokumenTidakDapatDimuatNaikComponent;
  let fixture: ComponentFixture<DokumenTidakDapatDimuatNaikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DokumenTidakDapatDimuatNaikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DokumenTidakDapatDimuatNaikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
