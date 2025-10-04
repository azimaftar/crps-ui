import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIbcComponent } from './modal-ibc.component';

describe('ModalIbcComponent', () => {
  let component: ModalIbcComponent;
  let fixture: ComponentFixture<ModalIbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalIbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
