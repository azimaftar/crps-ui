import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatAgensiComponent } from './maklumat-agensi.component';

describe('MaklumatAgensiComponent', () => {
  let component: MaklumatAgensiComponent;
  let fixture: ComponentFixture<MaklumatAgensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatAgensiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatAgensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
