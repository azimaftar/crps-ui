import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPelupusanKadKuasaComponent } from './maklumat-pelupusan-kad-kuasa.component';

describe('MaklumatPelupusanKadKuasaComponent', () => {
  let component: MaklumatPelupusanKadKuasaComponent;
  let fixture: ComponentFixture<MaklumatPelupusanKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPelupusanKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPelupusanKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
