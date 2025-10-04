import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanRoasterGeotimeComponent } from './pengurusan-roaster-geotime.component';

describe('PengurusanRoasterGeotimeComponent', () => {
  let component: PengurusanRoasterGeotimeComponent;
  let fixture: ComponentFixture<PengurusanRoasterGeotimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengurusanRoasterGeotimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengurusanRoasterGeotimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
