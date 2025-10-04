import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilPengembaraIbcComponent } from './maklumat-profil-pengembara-ibc.component';

describe('MaklumatProfilPengembaraIbcComponent', () => {
  let component: MaklumatProfilPengembaraIbcComponent;
  let fixture: ComponentFixture<MaklumatProfilPengembaraIbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilPengembaraIbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilPengembaraIbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
