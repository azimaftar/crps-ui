import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesahanPassportComponent } from './pengesahan-passport.component';

describe('PengesahanPassportComponent', () => {
  let component: PengesahanPassportComponent;
  let fixture: ComponentFixture<PengesahanPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesahanPassportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesahanPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
