import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemaskiniKesPemerhatianLhdnComponent } from './kemaskini-kes-pemerhatian-lhdn.component';

describe('KemaskiniKesPemerhatianLhdnComponent', () => {
  let component: KemaskiniKesPemerhatianLhdnComponent;
  let fixture: ComponentFixture<KemaskiniKesPemerhatianLhdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemaskiniKesPemerhatianLhdnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemaskiniKesPemerhatianLhdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
