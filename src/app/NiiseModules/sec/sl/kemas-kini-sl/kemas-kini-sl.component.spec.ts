import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasKiniSlComponent } from './kemas-kini-sl.component';

describe('KemasKiniSlComponent', () => {
  let component: KemasKiniSlComponent;
  let fixture: ComponentFixture<KemasKiniSlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemasKiniSlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemasKiniSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
