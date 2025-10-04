import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparMaklumatComponent } from './papar-maklumat.component';

describe('PaparMaklumatComponent', () => {
  let component: PaparMaklumatComponent;
  let fixture: ComponentFixture<PaparMaklumatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparMaklumatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparMaklumatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
