import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilSemakKompleksComponent } from './maklumat-profil-semak-kompleks.component';

describe('MaklumatProfilSemakKompleksComponent', () => {
  let component: MaklumatProfilSemakKompleksComponent;
  let fixture: ComponentFixture<MaklumatProfilSemakKompleksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilSemakKompleksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilSemakKompleksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
