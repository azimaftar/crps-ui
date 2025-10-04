import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPtjSelepasDataDihapusComponent } from './maklumat-ptj.component';

describe('MaklumatPtjSelepasDataDihapusComponent', () => {
  let component: MaklumatPtjSelepasDataDihapusComponent;
  let fixture: ComponentFixture<MaklumatPtjSelepasDataDihapusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPtjSelepasDataDihapusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPtjSelepasDataDihapusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
