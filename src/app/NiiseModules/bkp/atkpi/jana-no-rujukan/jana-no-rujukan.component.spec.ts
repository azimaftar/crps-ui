import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanaNoRujukanComponent } from './jana-no-rujukan.component';

describe('JanaNoRujukanComponent', () => {
  let component: JanaNoRujukanComponent;
  let fixture: ComponentFixture<JanaNoRujukanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanaNoRujukanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanaNoRujukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
