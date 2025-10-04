import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapJariFourPostSabahSarawakComponent } from './cap-jari-four-post-sabah-sarawak.component';

describe('CapJariFourPostSabahSarawakComponent', () => {
  let component: CapJariFourPostSabahSarawakComponent;
  let fixture: ComponentFixture<CapJariFourPostSabahSarawakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapJariFourPostSabahSarawakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapJariFourPostSabahSarawakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
