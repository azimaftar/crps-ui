import { ComponentFixture, TestBed } from '@angular/core/testing';

import { paparmaklumatterperinciComponent } from './papar-maklumat-terperinci.component';

describe('paparmaklumatterperinciComponent', () => {
  let component: paparmaklumatterperinciComponent;
  let fixture: ComponentFixture<paparmaklumatterperinciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [paparmaklumatterperinciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(paparmaklumatterperinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
