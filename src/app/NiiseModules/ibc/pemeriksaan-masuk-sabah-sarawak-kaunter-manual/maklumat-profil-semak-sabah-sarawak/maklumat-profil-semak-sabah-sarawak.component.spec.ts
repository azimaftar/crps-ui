import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilSemakSabahSarawakComponent } from './maklumat-profil-semak-sabah-sarawak.component';

describe('MaklumatProfilSemakSabahSarawakComponent', () => {
  let component: MaklumatProfilSemakSabahSarawakComponent;
  let fixture: ComponentFixture<MaklumatProfilSemakSabahSarawakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilSemakSabahSarawakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilSemakSabahSarawakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
