import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilPengembaraMainComponent } from './maklumat-profil-pengembara-main.component';

describe('MaklumatProfilPengembaraMainComponent', () => {
  let component: MaklumatProfilPengembaraMainComponent;
  let fixture: ComponentFixture<MaklumatProfilPengembaraMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilPengembaraMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilPengembaraMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
