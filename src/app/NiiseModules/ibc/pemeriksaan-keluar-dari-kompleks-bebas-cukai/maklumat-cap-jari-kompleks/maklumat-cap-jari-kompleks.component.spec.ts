import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatCapJariKompleksComponent } from './maklumat-cap-jari-kompleks.component';

describe('MaklumatCapJariKompleksComponent', () => {
  let component: MaklumatCapJariKompleksComponent;
  let fixture: ComponentFixture<MaklumatCapJariKompleksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatCapJariKompleksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatCapJariKompleksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
