import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesahanCapJariComponent } from './pengesahan-cap-jari.component';

describe('PengesahanCapJariComponent', () => {
  let component: PengesahanCapJariComponent;
  let fixture: ComponentFixture<PengesahanCapJariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesahanCapJariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesahanCapJariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
