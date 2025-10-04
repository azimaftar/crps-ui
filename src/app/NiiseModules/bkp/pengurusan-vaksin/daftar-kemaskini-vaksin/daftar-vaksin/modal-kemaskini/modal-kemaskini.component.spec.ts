import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKemaskiniComponent } from './modal-kemaskini.component';

describe('ModalKemaskiniComponent', () => {
  let component: ModalKemaskiniComponent;
  let fixture: ComponentFixture<ModalKemaskiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalKemaskiniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalKemaskiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
