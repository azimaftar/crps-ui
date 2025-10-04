import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesahanGantianKadKuasaComponent } from './pengesahan-gantian-kad-kuasa.component';

describe('PengesahanGantianKadKuasaComponent', () => {
  let component: PengesahanGantianKadKuasaComponent;
  let fixture: ComponentFixture<PengesahanGantianKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesahanGantianKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesahanGantianKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
