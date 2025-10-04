import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatalKesPemerhatianComponent } from './batal-kes-pemerhatian.component';

describe('BatalKesPemerhatianComponent', () => {
  let component: BatalKesPemerhatianComponent;
  let fixture: ComponentFixture<BatalKesPemerhatianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatalKesPemerhatianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatalKesPemerhatianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
