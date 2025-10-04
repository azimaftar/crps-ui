import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemaskiniComponent } from './kemaskini.component';

describe('KemaskiniComponent', () => {
  let component: KemaskiniComponent;
  let fixture: ComponentFixture<KemaskiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemaskiniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemaskiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
