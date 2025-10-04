import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadananPergerakanDataComponent } from './padanan-pergerakan-data.component';

describe('PadananPergerakanDataComponent', () => {
  let component: PadananPergerakanDataComponent;
  let fixture: ComponentFixture<PadananPergerakanDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadananPergerakanDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadananPergerakanDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
