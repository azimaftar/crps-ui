import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetujuTolakVaksinComponent } from './setuju-tolak-vaksin.component';

describe('SetujuTolakVaksinComponent', () => {
  let component: SetujuTolakVaksinComponent;
  let fixture: ComponentFixture<SetujuTolakVaksinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetujuTolakVaksinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetujuTolakVaksinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
