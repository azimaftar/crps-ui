import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparSubjekComponent } from './papar-subjek.component';

describe('PaparSubjekComponent', () => {
  let component: PaparSubjekComponent;
  let fixture: ComponentFixture<PaparSubjekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparSubjekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparSubjekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
