import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilKompleksComponent } from './maklumat-profil-kompleks.component';

describe('MaklumatProfilKompleksComponent', () => {
  let component: MaklumatProfilKompleksComponent;
  let fixture: ComponentFixture<MaklumatProfilKompleksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilKompleksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilKompleksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
