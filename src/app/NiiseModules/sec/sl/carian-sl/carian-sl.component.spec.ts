import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianSlComponent } from './carian-sl.component';

describe('CarianSlComponent', () => {
  let component: CarianSlComponent;
  let fixture: ComponentFixture<CarianSlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianSlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
