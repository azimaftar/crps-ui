import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanKeputusanNtlComponent } from './semakan-keputusan-ntl.component';

describe('SemakanKeputusanNtlComponent', () => {
  let component: SemakanKeputusanNtlComponent;
  let fixture: ComponentFixture<SemakanKeputusanNtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanKeputusanNtlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanKeputusanNtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
