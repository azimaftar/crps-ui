import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSimpanComponent } from './modal-simpan.component';

describe('ModalSimpanComponent', () => {
  let component: ModalSimpanComponent;
  let fixture: ComponentFixture<ModalSimpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSimpanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSimpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
