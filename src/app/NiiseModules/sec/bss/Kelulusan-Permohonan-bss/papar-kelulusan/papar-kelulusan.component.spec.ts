import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparKelulusanComponent } from './papar-kelulusan.component';

describe('PaparKelulusanComponent', () => {
  let component: PaparKelulusanComponent;
  let fixture: ComponentFixture<PaparKelulusanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparKelulusanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparKelulusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
