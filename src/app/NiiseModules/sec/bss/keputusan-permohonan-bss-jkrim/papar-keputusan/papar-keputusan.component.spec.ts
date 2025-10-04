import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparKeputusanComponent } from './papar-keputusan.component';

describe('PaparKeputusanComponent', () => {
  let component: PaparKeputusanComponent;
  let fixture: ComponentFixture<PaparKeputusanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparKeputusanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparKeputusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
