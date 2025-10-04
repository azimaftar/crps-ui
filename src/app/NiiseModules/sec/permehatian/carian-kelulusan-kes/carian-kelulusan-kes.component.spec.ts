import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianKelulusanKesComponent } from './carian-kelulusan-kes.component';

describe('CarianKelulusanKesComponent', () => {
  let component: CarianKelulusanKesComponent;
  let fixture: ComponentFixture<CarianKelulusanKesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianKelulusanKesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianKelulusanKesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
