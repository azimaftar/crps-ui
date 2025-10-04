import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesahanDataPengembaraComponent } from './pengesahan-data-pengembara.component';

describe('PengesahanDataPengembaraComponent', () => {
  let component: PengesahanDataPengembaraComponent;
  let fixture: ComponentFixture<PengesahanDataPengembaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesahanDataPengembaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesahanDataPengembaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
