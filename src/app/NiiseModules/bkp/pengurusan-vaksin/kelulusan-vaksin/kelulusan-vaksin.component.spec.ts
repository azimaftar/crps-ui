import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanVaksinComponent } from './kelulusan-vaksin.component';

describe('KelulusanVaksinComponent', () => {
  let component: KelulusanVaksinComponent;
  let fixture: ComponentFixture<KelulusanVaksinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanVaksinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanVaksinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
