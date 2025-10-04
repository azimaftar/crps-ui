import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianKelulusanPermohonanComponent } from './carian-kelulusan-permohonan.component';

describe('CarianKelulusanPermohonanComponent', () => {
  let component: CarianKelulusanPermohonanComponent;
  let fixture: ComponentFixture<CarianKelulusanPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianKelulusanPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianKelulusanPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
