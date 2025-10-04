import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatCapJariBothKompleksComponent } from './maklumat-cap-jari-both-kompleks.component';

describe('MaklumatCapJariBothKompleksComponent', () => {
  let component: MaklumatCapJariBothKompleksComponent;
  let fixture: ComponentFixture<MaklumatCapJariBothKompleksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatCapJariBothKompleksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatCapJariBothKompleksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
