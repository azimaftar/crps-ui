import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatCapJariFourPostKompleksComponent } from './maklumat-cap-jari-four-post-kompleks.component';

describe('MaklumatCapJariFourPostKompleksComponent', () => {
  let component: MaklumatCapJariFourPostKompleksComponent;
  let fixture: ComponentFixture<MaklumatCapJariFourPostKompleksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatCapJariFourPostKompleksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatCapJariFourPostKompleksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
