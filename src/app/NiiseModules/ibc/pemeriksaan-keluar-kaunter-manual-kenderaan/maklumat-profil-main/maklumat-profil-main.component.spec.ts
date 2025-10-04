import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilMainComponent } from './maklumat-profil-main.component';

describe('MaklumatProfilMainComponent', () => {
  let component: MaklumatProfilMainComponent;
  let fixture: ComponentFixture<MaklumatProfilMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
