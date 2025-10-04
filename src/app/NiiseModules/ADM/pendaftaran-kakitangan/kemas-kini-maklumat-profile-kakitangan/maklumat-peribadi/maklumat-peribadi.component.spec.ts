import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPeribadiComponent } from './maklumat-peribadi.component';

describe('MaklumatPeribadiComponent', () => {
  let component: MaklumatPeribadiComponent;
  let fixture: ComponentFixture<MaklumatPeribadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPeribadiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPeribadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
