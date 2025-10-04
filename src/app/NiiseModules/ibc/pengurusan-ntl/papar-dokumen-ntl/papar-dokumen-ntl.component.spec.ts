import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparDokumenNtlComponent } from './papar-dokumen-ntl.component';

describe('PaparDokumenNtlComponent', () => {
  let component: PaparDokumenNtlComponent;
  let fixture: ComponentFixture<PaparDokumenNtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparDokumenNtlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparDokumenNtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
