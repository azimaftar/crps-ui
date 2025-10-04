import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatKenderaanComponent } from './maklumat-kenderaan.component';

describe('MaklumatKenderaanComponent', () => {
  let component: MaklumatKenderaanComponent;
  let fixture: ComponentFixture<MaklumatKenderaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatKenderaanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatKenderaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
