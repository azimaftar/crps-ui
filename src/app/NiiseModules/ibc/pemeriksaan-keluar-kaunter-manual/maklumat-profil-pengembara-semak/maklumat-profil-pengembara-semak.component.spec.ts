import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilPengembaraSemakComponent } from './maklumat-profil-pengembara-semak.component';

describe('MaklumatProfilPengembaraSemakComponent', () => {
  let component: MaklumatProfilPengembaraSemakComponent;
  let fixture: ComponentFixture<MaklumatProfilPengembaraSemakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilPengembaraSemakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilPengembaraSemakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
