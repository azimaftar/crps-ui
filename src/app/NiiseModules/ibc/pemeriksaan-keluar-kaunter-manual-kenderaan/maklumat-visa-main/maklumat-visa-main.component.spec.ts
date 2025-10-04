import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatVisaMainComponent } from './maklumat-visa-main.component';

describe('MaklumatVisaMainComponent', () => {
  let component: MaklumatVisaMainComponent;
  let fixture: ComponentFixture<MaklumatVisaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatVisaMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatVisaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
