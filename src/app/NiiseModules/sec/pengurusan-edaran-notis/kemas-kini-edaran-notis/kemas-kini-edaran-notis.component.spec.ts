import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasKiniEdaranNotisComponent } from './kemas-kini-edaran-notis.component';

describe('KemasKiniEdaranNotisComponent', () => {
  let component: KemasKiniEdaranNotisComponent;
  let fixture: ComponentFixture<KemasKiniEdaranNotisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemasKiniEdaranNotisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemasKiniEdaranNotisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
