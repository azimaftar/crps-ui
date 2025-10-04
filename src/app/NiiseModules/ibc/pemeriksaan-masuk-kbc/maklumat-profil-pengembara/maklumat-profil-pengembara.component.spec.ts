import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilPengembaraComponent } from './maklumat-profil-pengembara.component';

describe('MaklumatProfilPengembaraComponent', () => {
  let component: MaklumatProfilPengembaraComponent;
  let fixture: ComponentFixture<MaklumatProfilPengembaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilPengembaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilPengembaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
