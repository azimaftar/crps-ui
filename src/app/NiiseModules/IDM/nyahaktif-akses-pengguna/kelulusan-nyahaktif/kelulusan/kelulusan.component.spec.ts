import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanComponent } from './kelulusan.component';

describe('KelulusanComponent', () => {
  let component: KelulusanComponent;
  let fixture: ComponentFixture<KelulusanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
