import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianSubjekComponent } from './carian-subjek.component';

describe('CarianSubjekComponent', () => {
  let component: CarianSubjekComponent;
  let fixture: ComponentFixture<CarianSubjekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianSubjekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianSubjekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
