import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanPerjalananComponent } from './imbasan-perjalanan.component';

describe('ImbasanPerjalananComponent', () => {
  let component: ImbasanPerjalananComponent;
  let fixture: ComponentFixture<ImbasanPerjalananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanPerjalananComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanPerjalananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
