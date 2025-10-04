import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatSabjekComponent } from './maklumat-sabjek.component';

describe('MaklumatSabjekComponent', () => {
  let component: MaklumatSabjekComponent;
  let fixture: ComponentFixture<MaklumatSabjekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatSabjekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatSabjekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
