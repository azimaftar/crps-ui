import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilihJenisSelenggaraComponent } from './pilih-jenis-selenggara.component';

describe('PilihJenisSelenggaraComponent', () => {
  let component: PilihJenisSelenggaraComponent;
  let fixture: ComponentFixture<PilihJenisSelenggaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilihJenisSelenggaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilihJenisSelenggaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
