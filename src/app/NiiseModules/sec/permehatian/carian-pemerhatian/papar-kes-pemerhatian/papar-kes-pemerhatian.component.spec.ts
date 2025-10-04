import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparKesPemerhatianComponent } from './papar-kes-pemerhatian.component';

describe('PaparKesPemerhatianComponent', () => {
  let component: PaparKesPemerhatianComponent;
  let fixture: ComponentFixture<PaparKesPemerhatianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparKesPemerhatianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparKesPemerhatianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
