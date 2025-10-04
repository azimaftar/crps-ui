import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapJariFourPostMainComponent } from './cap-jari-four-post-main.component';

describe('CapJariFourPostMainComponent', () => {
  let component: CapJariFourPostMainComponent;
  let fixture: ComponentFixture<CapJariFourPostMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapJariFourPostMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapJariFourPostMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
