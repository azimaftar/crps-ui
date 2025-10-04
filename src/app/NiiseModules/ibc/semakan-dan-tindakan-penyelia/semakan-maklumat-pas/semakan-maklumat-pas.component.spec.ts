import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanMaklumatPasComponent } from './semakan-maklumat-pas.component';

describe('SemakanMaklumatPasComponent', () => {
  let component: SemakanMaklumatPasComponent;
  let fixture: ComponentFixture<SemakanMaklumatPasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanMaklumatPasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanMaklumatPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
