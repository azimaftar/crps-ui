import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilPengembaraSabahSarawakComponent } from './maklumat-profil-pengembara-sabah-sarawak.component';

describe('MaklumatProfilPengembaraSabahSarawakComponent', () => {
  let component: MaklumatProfilPengembaraSabahSarawakComponent;
  let fixture: ComponentFixture<MaklumatProfilPengembaraSabahSarawakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilPengembaraSabahSarawakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilPengembaraSabahSarawakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
