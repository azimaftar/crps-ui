import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatCarianTidakWujudComponent } from './maklumat-carian-tidak-wujud.component';

describe('MaklumatCarianTidakWujudComponent', () => {
  let component: MaklumatCarianTidakWujudComponent;
  let fixture: ComponentFixture<MaklumatCarianTidakWujudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatCarianTidakWujudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatCarianTidakWujudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
