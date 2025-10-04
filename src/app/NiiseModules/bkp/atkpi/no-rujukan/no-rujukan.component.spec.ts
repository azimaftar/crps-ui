import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRujukanComponent } from './no-rujukan.component';

describe('NoRujukanComponent', () => {
  let component: NoRujukanComponent;
  let fixture: ComponentFixture<NoRujukanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoRujukanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoRujukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
