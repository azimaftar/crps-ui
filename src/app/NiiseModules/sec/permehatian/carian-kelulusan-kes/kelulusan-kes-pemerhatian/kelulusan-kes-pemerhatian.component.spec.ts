import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanKesPemerhatianComponent } from './kelulusan-kes-pemerhatian.component';

describe('KelulusanKesPemerhatianComponent', () => {
  let component: KelulusanKesPemerhatianComponent;
  let fixture: ComponentFixture<KelulusanKesPemerhatianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanKesPemerhatianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanKesPemerhatianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
