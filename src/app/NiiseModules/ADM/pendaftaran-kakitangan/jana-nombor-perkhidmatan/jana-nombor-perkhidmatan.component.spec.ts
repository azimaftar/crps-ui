import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanaNomborPerkhidmatanComponent } from './jana-nombor-perkhidmatan.component';

describe('JanaNomborPerkhidmatanComponent', () => {
  let component: JanaNomborPerkhidmatanComponent;
  let fixture: ComponentFixture<JanaNomborPerkhidmatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanaNomborPerkhidmatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanaNomborPerkhidmatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
