import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilPengembaraKompleksComponent } from './maklumat-profil-pengembara-kompleks.component';

describe('MaklumatProfilPengembaraKompleksComponent', () => {
  let component: MaklumatProfilPengembaraKompleksComponent;
  let fixture: ComponentFixture<MaklumatProfilPengembaraKompleksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilPengembaraKompleksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilPengembaraKompleksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
