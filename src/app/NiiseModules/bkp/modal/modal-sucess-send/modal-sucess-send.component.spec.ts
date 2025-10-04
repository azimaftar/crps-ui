import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSucessSendComponent } from './modal-sucess-send.component';

describe('ModalSucessSendComponent', () => {
  let component: ModalSucessSendComponent;
  let fixture: ComponentFixture<ModalSucessSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSucessSendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSucessSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
