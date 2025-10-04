import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatRadiusComponent } from './maklumat-radius.component';

describe('MaklumatRadiusComponent', () => {
  let component: MaklumatRadiusComponent;
  let fixture: ComponentFixture<MaklumatRadiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatRadiusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaklumatRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
