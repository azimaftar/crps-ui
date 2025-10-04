import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalKeputusanNtlComponent } from './modal-keputusan-ntl.component';

describe('ModalKeputusanNtlComponent', () => {
  let component: ModalKeputusanNtlComponent;
  let fixture: ComponentFixture<ModalKeputusanNtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalKeputusanNtlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalKeputusanNtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
