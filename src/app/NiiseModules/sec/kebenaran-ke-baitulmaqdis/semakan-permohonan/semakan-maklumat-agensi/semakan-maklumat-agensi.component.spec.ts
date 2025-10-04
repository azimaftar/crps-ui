import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanMaklumatAgensiComponent } from './semakan-maklumat-agensi.component';

describe('SemakanMaklumatAgensiComponent', () => {
  let component: SemakanMaklumatAgensiComponent;
  let fixture: ComponentFixture<SemakanMaklumatAgensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanMaklumatAgensiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanMaklumatAgensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
