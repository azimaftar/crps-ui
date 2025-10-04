import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparBssComponent } from './papar-bss.component';

describe('PaparBssComponent', () => {
  let component: PaparBssComponent;
  let fixture: ComponentFixture<PaparBssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparBssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparBssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
