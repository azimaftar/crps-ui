import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilSemakMainComponent } from './maklumat-profil-semak-main.component';

describe('MaklumatProfilSemakMainComponent', () => {
  let component: MaklumatProfilSemakMainComponent;
  let fixture: ComponentFixture<MaklumatProfilSemakMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilSemakMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilSemakMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
