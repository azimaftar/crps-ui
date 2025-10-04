import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanCapJariStatusImbasanComponent } from './imbasan-cap-jari-status-imbasan.component';

describe('ImbasanCapJariStatusImbasanComponent', () => {
  let component: ImbasanCapJariStatusImbasanComponent;
  let fixture: ComponentFixture<ImbasanCapJariStatusImbasanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanCapJariStatusImbasanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanCapJariStatusImbasanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
