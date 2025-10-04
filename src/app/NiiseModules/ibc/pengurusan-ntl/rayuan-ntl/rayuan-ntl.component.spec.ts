import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayuanNtlComponent } from './rayuan-ntl.component';

describe('RayuanNtlComponent', () => {
  let component: RayuanNtlComponent;
  let fixture: ComponentFixture<RayuanNtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RayuanNtlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RayuanNtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
