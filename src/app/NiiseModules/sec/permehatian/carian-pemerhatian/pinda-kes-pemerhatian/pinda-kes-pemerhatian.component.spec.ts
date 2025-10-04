import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PindaKesPemerhatianComponent } from './pinda-kes-pemerhatian.component';

describe('PindaKesPemerhatianComponent', () => {
  let component: PindaKesPemerhatianComponent;
  let fixture: ComponentFixture<PindaKesPemerhatianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PindaKesPemerhatianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PindaKesPemerhatianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
