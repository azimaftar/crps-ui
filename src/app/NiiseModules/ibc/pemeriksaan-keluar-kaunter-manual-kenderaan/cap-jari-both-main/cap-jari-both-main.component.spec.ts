import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapJariBothMainComponent } from './cap-jari-both-main.component';

describe('CapJariBothMainComponent', () => {
  let component: CapJariBothMainComponent;
  let fixture: ComponentFixture<CapJariBothMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapJariBothMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapJariBothMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
