import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerimaJadualGiliranBertugasComponent } from './terima-jadual-giliran-bertugas.component';

describe('TerimaJadualGiliranBertugasComponent', () => {
  let component: TerimaJadualGiliranBertugasComponent;
  let fixture: ComponentFixture<TerimaJadualGiliranBertugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerimaJadualGiliranBertugasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerimaJadualGiliranBertugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
