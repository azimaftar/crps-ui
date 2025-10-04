import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatVaksinComponent } from './maklumat-vaksin.component';

describe('MaklumatVaksinComponent', () => {
  let component: MaklumatVaksinComponent;
  let fixture: ComponentFixture<MaklumatVaksinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatVaksinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatVaksinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
