import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPassportComponent } from './maklumat-passport.component';

describe('MaklumatPassportComponent', () => {
  let component: MaklumatPassportComponent;
  let fixture: ComponentFixture<MaklumatPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPassportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
