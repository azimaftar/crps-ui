import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TandatanganDigitalComponent } from './tandatangan-digital.component';

describe('TandatanganDigitalComponent', () => {
  let component: TandatanganDigitalComponent;
  let fixture: ComponentFixture<TandatanganDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TandatanganDigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TandatanganDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
