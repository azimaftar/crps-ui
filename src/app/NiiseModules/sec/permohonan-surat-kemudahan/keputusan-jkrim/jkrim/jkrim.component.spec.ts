import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JkrimComponent } from './jkrim.component';

describe('JkrimComponent', () => {
  let component: JkrimComponent;
  let fixture: ComponentFixture<JkrimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JkrimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JkrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
