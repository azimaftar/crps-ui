import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanPassportComponent } from './imbasan-passport.component';

describe('ImbasanPassportComponent', () => {
  let component: ImbasanPassportComponent;
  let fixture: ComponentFixture<ImbasanPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanPassportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
