import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparSlComponent } from './papar-sl.component';

describe('PaparSlComponent', () => {
  let component: PaparSlComponent;
  let fixture: ComponentFixture<PaparSlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparSlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
