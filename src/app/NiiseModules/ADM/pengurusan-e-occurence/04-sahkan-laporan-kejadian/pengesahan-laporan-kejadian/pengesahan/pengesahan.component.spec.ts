import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesahanComponent } from './pengesahan.component';

describe('PengesahanComponent', () => {
  let component: PengesahanComponent;
  let fixture: ComponentFixture<PengesahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesahanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
