import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparanComponent } from './paparan.component';

describe('PaparanComponent', () => {
  let component: PaparanComponent;
  let fixture: ComponentFixture<PaparanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
