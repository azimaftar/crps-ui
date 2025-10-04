import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSubmitComponent } from './on-submit.component';

describe('ModalSucessSendComponent', () => {
  let component: OnSubmitComponent;
  let fixture: ComponentFixture<OnSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
