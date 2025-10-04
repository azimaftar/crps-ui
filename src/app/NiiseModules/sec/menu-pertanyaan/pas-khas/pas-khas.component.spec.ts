import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasKhasComponent } from './pas-khas.component';

describe('PasKhasComponent', () => {
  let component: PasKhasComponent;
  let fixture: ComponentFixture<PasKhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasKhasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasKhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
