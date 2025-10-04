import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadualRosterComponent } from './jadual-roster.component';

describe('JadualRosterComponent', () => {
  let component: JadualRosterComponent;
  let fixture: ComponentFixture<JadualRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JadualRosterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JadualRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
