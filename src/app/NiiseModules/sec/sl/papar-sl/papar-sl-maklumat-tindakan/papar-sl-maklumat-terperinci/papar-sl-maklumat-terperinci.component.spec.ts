import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparSlMaklumatTerperinciComponent } from './papar-sl-maklumat-terperinci.component';

describe('PaparSlMaklumatTerperinciComponent', () => {
  let component: PaparSlMaklumatTerperinciComponent;
  let fixture: ComponentFixture<PaparSlMaklumatTerperinciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparSlMaklumatTerperinciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparSlMaklumatTerperinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
