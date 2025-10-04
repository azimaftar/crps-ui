import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPenumpangComponent } from './maklumat-penumpang.component';

describe('MaklumatPenumpangComponent', () => {
  let component: MaklumatPenumpangComponent;
  let fixture: ComponentFixture<MaklumatPenumpangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPenumpangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPenumpangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
