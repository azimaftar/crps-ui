import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanEOccurenceComponent } from './pengurusan-e-occurence.component';

describe('PengurusanEOccurenceComponent', () => {
  let component: PengurusanEOccurenceComponent;
  let fixture: ComponentFixture<PengurusanEOccurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengurusanEOccurenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengurusanEOccurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
