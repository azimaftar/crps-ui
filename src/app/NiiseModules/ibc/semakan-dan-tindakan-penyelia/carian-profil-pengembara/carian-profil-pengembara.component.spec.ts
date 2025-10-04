import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianProfilPengembaraComponent } from './carian-profil-pengembara.component';

describe('CarianProfilPengembaraComponent', () => {
  let component: CarianProfilPengembaraComponent;
  let fixture: ComponentFixture<CarianProfilPengembaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianProfilPengembaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianProfilPengembaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
