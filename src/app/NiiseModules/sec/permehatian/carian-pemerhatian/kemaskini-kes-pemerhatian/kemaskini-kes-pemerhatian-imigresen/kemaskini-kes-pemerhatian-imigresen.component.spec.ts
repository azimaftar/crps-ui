import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemaskiniKesPemerhatianImigresenComponent } from './kemaskini-kes-pemerhatian-imigresen.component';

describe('KemaskiniKesPemerhatianImigresenComponent', () => {
  let component: KemaskiniKesPemerhatianImigresenComponent;
  let fixture: ComponentFixture<KemaskiniKesPemerhatianImigresenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemaskiniKesPemerhatianImigresenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemaskiniKesPemerhatianImigresenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
