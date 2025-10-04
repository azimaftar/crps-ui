import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilIndividu } from './maklumat-profil-individu.component';

describe('MaklumatProfilIndividu', () => {
  let component: MaklumatProfilIndividu;
  let fixture: ComponentFixture<MaklumatProfilIndividu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilIndividu],
    }).compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilIndividu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
