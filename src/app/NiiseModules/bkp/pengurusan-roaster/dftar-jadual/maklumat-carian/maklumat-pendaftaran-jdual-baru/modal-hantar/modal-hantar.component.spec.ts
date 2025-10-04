import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHantarComponent } from './modal-hantar.component';

describe('ModalHantarComponent', () => {
  let component: ModalHantarComponent;
  let fixture: ComponentFixture<ModalHantarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalHantarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHantarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
