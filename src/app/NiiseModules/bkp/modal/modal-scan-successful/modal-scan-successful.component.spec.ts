import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalScanSuccessfulComponent } from './modal-scan-successful.component';

describe('ModalScanSuccessfulComponent', () => {
  let component: ModalScanSuccessfulComponent;
  let fixture: ComponentFixture<ModalScanSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalScanSuccessfulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalScanSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
