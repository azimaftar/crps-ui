import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamanUtamaPengurusanKadKuasaComponent } from './laman-utama-pengurusan-kad-kuasa.component';

describe('LamanUtamaPengurusanKadKuasaComponent', () => {
  let component: LamanUtamaPengurusanKadKuasaComponent;
  let fixture: ComponentFixture<LamanUtamaPengurusanKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LamanUtamaPengurusanKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamanUtamaPengurusanKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
