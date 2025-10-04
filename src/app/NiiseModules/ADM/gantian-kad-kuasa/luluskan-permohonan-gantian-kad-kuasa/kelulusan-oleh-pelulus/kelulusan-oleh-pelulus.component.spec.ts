import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanOlehPelulusComponent } from './kelulusan-oleh-pelulus.component';

describe('KelulusanOlehPelulusComponent', () => {
  let component: KelulusanOlehPelulusComponent;
  let fixture: ComponentFixture<KelulusanOlehPelulusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanOlehPelulusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanOlehPelulusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
