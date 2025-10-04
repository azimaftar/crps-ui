import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatSenaraiComponent } from './maklumat-senarai.component';

describe('MaklumatSenaraiComponent', () => {
  let component: MaklumatSenaraiComponent;
  let fixture: ComponentFixture<MaklumatSenaraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatSenaraiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatSenaraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
