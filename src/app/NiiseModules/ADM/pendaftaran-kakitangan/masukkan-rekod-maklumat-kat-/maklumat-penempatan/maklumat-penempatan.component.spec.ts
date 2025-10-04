import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPenempatanComponent } from './maklumat-penempatan.component';

describe('MaklumatPenempatanComponent', () => {
  let component: MaklumatPenempatanComponent;
  let fixture: ComponentFixture<MaklumatPenempatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPenempatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPenempatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
