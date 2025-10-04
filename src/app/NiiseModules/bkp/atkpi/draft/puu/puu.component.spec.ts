import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PUUComponent } from './puu.component';

describe('PUUComponent', () => {
  let component: PUUComponent;
  let fixture: ComponentFixture<PUUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PUUComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PUUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
