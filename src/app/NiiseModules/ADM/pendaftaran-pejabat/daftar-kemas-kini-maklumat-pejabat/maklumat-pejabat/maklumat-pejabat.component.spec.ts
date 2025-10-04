import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPejabatComponent } from './maklumat-pejabat.component';

describe('MaklumatPejabatComponent', () => {
  let component: MaklumatPejabatComponent;
  let fixture: ComponentFixture<MaklumatPejabatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPejabatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPejabatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
