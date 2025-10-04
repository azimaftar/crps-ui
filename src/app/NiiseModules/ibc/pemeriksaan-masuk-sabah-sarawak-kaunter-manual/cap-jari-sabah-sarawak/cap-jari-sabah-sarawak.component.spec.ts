import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapJariSabahSarawakComponent } from './cap-jari-sabah-sarawak.component';

describe('CapJariSabahSarawakComponent', () => {
  let component: CapJariSabahSarawakComponent;
  let fixture: ComponentFixture<CapJariSabahSarawakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapJariSabahSarawakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapJariSabahSarawakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
