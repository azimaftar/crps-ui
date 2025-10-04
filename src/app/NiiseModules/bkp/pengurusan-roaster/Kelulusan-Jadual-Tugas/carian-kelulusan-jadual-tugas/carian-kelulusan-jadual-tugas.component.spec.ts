import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianKelulusanJadualTugasComponent } from './carian-kelulusan-jadual-tugas.component';

describe('CarianKelulusanJadualTugasComponent', () => {
  let component: CarianKelulusanJadualTugasComponent;
  let fixture: ComponentFixture<CarianKelulusanJadualTugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianKelulusanJadualTugasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianKelulusanJadualTugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
