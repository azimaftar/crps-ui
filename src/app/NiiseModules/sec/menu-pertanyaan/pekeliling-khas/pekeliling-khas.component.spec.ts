import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PekelilingKhasComponent } from './pekeliling-khas.component';

describe('PekelilingKhasComponent', () => {
  let component: PekelilingKhasComponent;
  let fixture: ComponentFixture<PekelilingKhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PekelilingKhasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PekelilingKhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
