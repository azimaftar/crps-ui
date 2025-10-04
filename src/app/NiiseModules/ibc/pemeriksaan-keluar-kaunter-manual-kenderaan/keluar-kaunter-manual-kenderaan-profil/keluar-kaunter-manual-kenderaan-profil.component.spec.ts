import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeluarKaunterManualKenderaanProfilComponent } from './keluar-kaunter-manual-kenderaan-profil.component';

describe('KeluarKaunterManualKenderaanProfilComponent', () => {
  let component: KeluarKaunterManualKenderaanProfilComponent;
  let fixture: ComponentFixture<KeluarKaunterManualKenderaanProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeluarKaunterManualKenderaanProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeluarKaunterManualKenderaanProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
