import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianWarganegaraComponent } from './carian-warganegara.component';

describe('CarianWarganegaraComponent', () => {
  let component: CarianWarganegaraComponent;
  let fixture: ComponentFixture<CarianWarganegaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianWarganegaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianWarganegaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
