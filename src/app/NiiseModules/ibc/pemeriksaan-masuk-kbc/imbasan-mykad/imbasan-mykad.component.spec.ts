import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanMykadComponent } from './imbasan-mykad.component';

describe('ImbasanMykadComponent', () => {
  let component: ImbasanMykadComponent;
  let fixture: ComponentFixture<ImbasanMykadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanMykadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanMykadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
