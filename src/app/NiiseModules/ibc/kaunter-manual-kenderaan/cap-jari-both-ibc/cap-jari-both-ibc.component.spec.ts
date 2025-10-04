import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapJariBothIbcComponent } from './cap-jari-both-ibc.component';

describe('CapJariBothIbcComponent', () => {
  let component: CapJariBothIbcComponent;
  let fixture: ComponentFixture<CapJariBothIbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapJariBothIbcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapJariBothIbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
