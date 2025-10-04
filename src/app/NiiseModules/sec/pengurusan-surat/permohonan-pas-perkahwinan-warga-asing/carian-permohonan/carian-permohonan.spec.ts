import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianPermohonanComponents } from './carian-permohonan.component';

describe('CarianPermohonanComponents', () => {
  let component: CarianPermohonanComponents;
  let fixture: ComponentFixture<CarianPermohonanComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianPermohonanComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianPermohonanComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
