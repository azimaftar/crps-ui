import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapJariMainComponent } from './cap-jari-main.component';

describe('CapJariMainComponent', () => {
  let component: CapJariMainComponent;
  let fixture: ComponentFixture<CapJariMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapJariMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapJariMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
