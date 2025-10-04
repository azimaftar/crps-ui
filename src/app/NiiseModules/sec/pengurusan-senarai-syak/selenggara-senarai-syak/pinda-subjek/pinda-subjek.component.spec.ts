import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PindaSubjekComponent } from './pinda-subjek.component';

describe('PindaSubjekComponent', () => {
  let component: PindaSubjekComponent;
  let fixture: ComponentFixture<PindaSubjekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PindaSubjekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PindaSubjekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
