import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemaskiniSlComponent } from './kemaskini-sl.component';

describe('KemaskiniSlComponent', () => {
  let component: KemaskiniSlComponent;
  let fixture: ComponentFixture<KemaskiniSlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemaskiniSlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemaskiniSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
