import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilMaklumatProfilPengembaraComponent } from './maklumat-profil-maklumat-profil-pengembara.component';

describe('MaklumatProfilMaklumatProfilPengembaraComponent', () => {
  let component: MaklumatProfilMaklumatProfilPengembaraComponent;
  let fixture: ComponentFixture<MaklumatProfilMaklumatProfilPengembaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilMaklumatProfilPengembaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilMaklumatProfilPengembaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
