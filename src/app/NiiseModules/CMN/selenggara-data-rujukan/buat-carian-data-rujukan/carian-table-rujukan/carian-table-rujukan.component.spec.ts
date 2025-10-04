import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianTableRujukanComponent } from './carian-table-rujukan.component';

describe('CarianTableRujukanComponent', () => {
  let component: CarianTableRujukanComponent;
  let fixture: ComponentFixture<CarianTableRujukanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianTableRujukanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianTableRujukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
