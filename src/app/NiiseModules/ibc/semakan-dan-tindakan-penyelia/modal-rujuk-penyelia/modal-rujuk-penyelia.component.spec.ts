import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRujukPenyeliaComponent } from './modal-rujuk-penyelia.component';

describe('ModalRujukPenyeliaComponent', () => {
  let component: ModalRujukPenyeliaComponent;
  let fixture: ComponentFixture<ModalRujukPenyeliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRujukPenyeliaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRujukPenyeliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
