import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemaskiniKesPemerhatianKastamComponent } from './kemaskini-kes-pemerhatian-kastam.component';

describe('KemaskiniKesPemerhatianKastamComponent', () => {
  let component: KemaskiniKesPemerhatianKastamComponent;
  let fixture: ComponentFixture<KemaskiniKesPemerhatianKastamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemaskiniKesPemerhatianKastamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemaskiniKesPemerhatianKastamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
