import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesahanKelewatanComponent } from './pengesahan-kelewatan.component';

describe('PengesahanKelewatanComponent', () => {
  let component: PengesahanKelewatanComponent;
  let fixture: ComponentFixture<PengesahanKelewatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesahanKelewatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesahanKelewatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
