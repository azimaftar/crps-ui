import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PBAComponent } from './pba.component';

describe('PBAComponent', () => {
  let component: PBAComponent;
  let fixture: ComponentFixture<PBAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PBAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
