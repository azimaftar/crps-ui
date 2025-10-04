import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatAhliComponent } from './maklumat-ahli.component';

describe('MaklumatAhliComponent', () => {
  let component: MaklumatAhliComponent;
  let fixture: ComponentFixture<MaklumatAhliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatAhliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatAhliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
