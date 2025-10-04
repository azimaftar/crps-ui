import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayuanNtlFormComponent } from './rayuan-ntl-form.component';

describe('RayuanNtlFormComponent', () => {
  let component: RayuanNtlFormComponent;
  let fixture: ComponentFixture<RayuanNtlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RayuanNtlFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RayuanNtlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
