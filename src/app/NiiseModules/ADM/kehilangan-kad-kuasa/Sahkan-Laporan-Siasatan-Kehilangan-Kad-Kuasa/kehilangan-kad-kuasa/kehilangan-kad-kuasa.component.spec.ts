import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermohonanKadKuasaComponent } from './kehilangan-kad-kuasa.component';

describe('PermohonanKadKuasaComponent', () => {
  let component: PermohonanKadKuasaComponent;
  let fixture: ComponentFixture<PermohonanKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermohonanKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermohonanKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
