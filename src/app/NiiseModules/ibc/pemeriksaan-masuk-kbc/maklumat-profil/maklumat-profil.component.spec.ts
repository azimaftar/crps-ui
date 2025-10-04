import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilComponent } from './maklumat-profil.component';

describe('MaklumatProfilComponent', () => {
  let component: MaklumatProfilComponent;
  let fixture: ComponentFixture<MaklumatProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
