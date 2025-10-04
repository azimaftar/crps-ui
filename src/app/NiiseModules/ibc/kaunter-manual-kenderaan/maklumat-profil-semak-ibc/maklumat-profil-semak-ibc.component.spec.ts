import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilSemakIbcComponent } from './maklumat-profil-semak-ibc.component';

describe('MaklumatProfilSemakIbcComponent', () => {
  let component: MaklumatProfilSemakIbcComponent;
  let fixture: ComponentFixture<MaklumatProfilSemakIbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilSemakIbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilSemakIbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
