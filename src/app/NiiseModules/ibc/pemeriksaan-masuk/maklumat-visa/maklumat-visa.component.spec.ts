import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatVisaComponent } from './maklumat-visa.component';

describe('MaklumatVisaComponent', () => {
  let component: MaklumatVisaComponent;
  let fixture: ComponentFixture<MaklumatVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatVisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
