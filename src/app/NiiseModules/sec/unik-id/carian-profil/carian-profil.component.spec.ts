import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianProfilComponent } from './carian-profil.component';

describe('CarianProfilComponent', () => {
  let component: CarianProfilComponent;
  let fixture: ComponentFixture<CarianProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianProfilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarianProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
