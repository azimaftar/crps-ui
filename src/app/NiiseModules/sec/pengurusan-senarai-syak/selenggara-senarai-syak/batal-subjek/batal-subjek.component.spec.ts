import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatalSubjekComponent } from './batal-subjek.component';

describe('BatalSubjekComponent', () => {
  let component: BatalSubjekComponent;
  let fixture: ComponentFixture<BatalSubjekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatalSubjekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatalSubjekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
