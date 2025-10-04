import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatCarianComponent } from './maklumat-carian.component';

describe('MaklumatCarianComponent', () => {
  let component: MaklumatCarianComponent;
  let fixture: ComponentFixture<MaklumatCarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatCarianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatCarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
