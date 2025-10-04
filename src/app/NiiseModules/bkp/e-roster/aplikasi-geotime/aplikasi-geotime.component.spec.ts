import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplikasiGeotimeComponent } from './aplikasi-geotime.component';

describe('AplikasiGeotimeComponent', () => {
  let component: AplikasiGeotimeComponent;
  let fixture: ComponentFixture<AplikasiGeotimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplikasiGeotimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplikasiGeotimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
