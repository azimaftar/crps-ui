import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanCapJariKiriComponent } from './imbasan-cap-jari-kiri.component';

describe('ImbasanCapJariKiriComponent', () => {
  let component: ImbasanCapJariKiriComponent;
  let fixture: ComponentFixture<ImbasanCapJariKiriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanCapJariKiriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanCapJariKiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
