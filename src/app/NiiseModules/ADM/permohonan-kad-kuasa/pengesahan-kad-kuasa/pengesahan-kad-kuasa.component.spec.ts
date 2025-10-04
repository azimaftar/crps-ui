import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesahanKadKuasaComponent } from './pengesahan-kad-kuasa.component';

describe('PengesahanKadKuasaComponent', () => {
  let component: PengesahanKadKuasaComponent;
  let fixture: ComponentFixture<PengesahanKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesahanKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesahanKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
