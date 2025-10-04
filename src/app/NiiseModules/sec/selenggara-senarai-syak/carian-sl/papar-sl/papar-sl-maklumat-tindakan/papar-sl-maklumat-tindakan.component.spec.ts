import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparSlMaklumatTindakanComponent } from './papar-sl-maklumat-tindakan.component';

describe('PaparSlMaklumatTindakanComponent', () => {
  let component: PaparSlMaklumatTindakanComponent;
  let fixture: ComponentFixture<PaparSlMaklumatTindakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparSlMaklumatTindakanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparSlMaklumatTindakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
