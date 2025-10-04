import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPeribadiSabjekComponent } from './maklumat-peribadi-sabjek.component';

describe('MaklumatPeribadiSabjekComponent', () => {
  let component: MaklumatPeribadiSabjekComponent;
  let fixture: ComponentFixture<MaklumatPeribadiSabjekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPeribadiSabjekComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaklumatPeribadiSabjekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
