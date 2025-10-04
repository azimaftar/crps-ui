import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalScanUnsuccessfulComponent } from './modal-scan-unsuccessful.component';

describe('ModalScanUnsuccessfulComponent', () => {
  let component: ModalScanUnsuccessfulComponent;
  let fixture: ComponentFixture<ModalScanUnsuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalScanUnsuccessfulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalScanUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
