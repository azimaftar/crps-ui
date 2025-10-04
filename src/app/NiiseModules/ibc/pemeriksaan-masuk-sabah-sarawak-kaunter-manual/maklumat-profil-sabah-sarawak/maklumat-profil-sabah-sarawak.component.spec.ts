import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilSabahSarawakComponent } from './maklumat-profil-sabah-sarawak.component';

describe('MaklumatProfilSabahSarawakComponent', () => {
  let component: MaklumatProfilSabahSarawakComponent;
  let fixture: ComponentFixture<MaklumatProfilSabahSarawakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilSabahSarawakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilSabahSarawakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
