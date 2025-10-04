import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatSyarikatPerkapalanComponent } from './maklumat-syarikat-perkapalan.component';

describe('MaklumatSyarikatPerkapalanComponent', () => {
  let component: MaklumatSyarikatPerkapalanComponent;
  let fixture: ComponentFixture<MaklumatSyarikatPerkapalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatSyarikatPerkapalanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatSyarikatPerkapalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
