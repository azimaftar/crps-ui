import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelenggaraTakwimComponent } from './selenggara-takwim.component';

describe('SelenggaraTakwimComponent', () => {
  let component: SelenggaraTakwimComponent;
  let fixture: ComponentFixture<SelenggaraTakwimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelenggaraTakwimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelenggaraTakwimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
