import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanNtlComponent } from './imbasan-ntl.component';

describe('ImbasanNtlComponent', () => {
  let component: ImbasanNtlComponent;
  let fixture: ComponentFixture<ImbasanNtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanNtlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanNtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
