import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalScanOutsideComponent } from './modal-scan-outside.component';

describe('ModalScanOutsideComponent', () => {
  let component: ModalScanOutsideComponent;
  let fixture: ComponentFixture<ModalScanOutsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalScanOutsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalScanOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
