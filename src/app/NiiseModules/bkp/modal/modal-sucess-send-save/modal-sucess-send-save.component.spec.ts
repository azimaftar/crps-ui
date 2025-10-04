import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSucessSendSaveComponent } from './modal-sucess-send-save.component';

describe('ModalSucessSendSaveComponent', () => {
  let component: ModalSucessSendSaveComponent;
  let fixture: ComponentFixture<ModalSucessSendSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSucessSendSaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSucessSendSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
