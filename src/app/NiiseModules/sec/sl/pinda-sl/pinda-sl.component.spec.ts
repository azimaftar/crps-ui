import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PindaSlComponent } from './pinda-sl.component';

describe('PindaSlComponent', () => {
  let component: PindaSlComponent;
  let fixture: ComponentFixture<PindaSlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PindaSlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PindaSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
