import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanKadKuasaComponent } from './pengurusan-kad-kuasa.component';

describe('PengurusanKadKuasaComponent', () => {
  let component: PengurusanKadKuasaComponent;
  let fixture: ComponentFixture<PengurusanKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengurusanKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengurusanKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
