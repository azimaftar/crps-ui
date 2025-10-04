import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanCapJariComponent } from './imbasan-cap-jari.component';

describe('ImbasanCapJariComponent', () => {
  let component: ImbasanCapJariComponent;
  let fixture: ComponentFixture<ImbasanCapJariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanCapJariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanCapJariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
