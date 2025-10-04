import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatSewaanComponent } from './maklumat-sewaan.component';

describe('MaklumatSewaanComponent', () => {
  let component: MaklumatSewaanComponent;
  let fixture: ComponentFixture<MaklumatSewaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatSewaanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatSewaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
