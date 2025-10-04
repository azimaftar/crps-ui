import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapJariFourPostIbcComponent } from './cap-jari-four-post-ibc.component';

describe('CapJariFourPostIbcComponent', () => {
  let component: CapJariFourPostIbcComponent;
  let fixture: ComponentFixture<CapJariFourPostIbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapJariFourPostIbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapJariFourPostIbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
