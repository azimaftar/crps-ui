import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilIbcComponent } from './maklumat-profil-ibc.component';

describe('MaklumatProfilIbcComponent', () => {
  let component: MaklumatProfilIbcComponent;
  let fixture: ComponentFixture<MaklumatProfilIbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilIbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilIbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
