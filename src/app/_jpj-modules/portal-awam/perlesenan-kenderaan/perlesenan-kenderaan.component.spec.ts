import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerlesenanKenderaanComponent } from './perlesenan-kenderaan.component';

describe('PerlesenanKenderaanComponent', () => {
  let component: PerlesenanKenderaanComponent;
  let fixture: ComponentFixture<PerlesenanKenderaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerlesenanKenderaanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerlesenanKenderaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
