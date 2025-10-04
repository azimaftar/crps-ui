import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasKiniStatusTerimaKadKuasaComponent } from './kemas-kini-status-terima-kad-kuasa.component';

describe('KemasKiniStatusTerimaKadKuasaComponent', () => {
  let component: KemasKiniStatusTerimaKadKuasaComponent;
  let fixture: ComponentFixture<KemasKiniStatusTerimaKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemasKiniStatusTerimaKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemasKiniStatusTerimaKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
