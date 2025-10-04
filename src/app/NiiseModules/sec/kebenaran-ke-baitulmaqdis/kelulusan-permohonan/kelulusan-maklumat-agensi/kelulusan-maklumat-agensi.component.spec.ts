import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanMaklumatAgensiComponent } from './kelulusan-maklumat-agensi.component';

describe('KelulusanMaklumatAgensiComponent', () => {
  let component: KelulusanMaklumatAgensiComponent;
  let fixture: ComponentFixture<KelulusanMaklumatAgensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanMaklumatAgensiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanMaklumatAgensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
