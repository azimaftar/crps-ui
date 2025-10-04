import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatKontrakPenyelenggaraanComponent } from './maklumat-kontrak-penyelenggaraan.component';

describe('MaklumatKontrakPenyelenggaraanComponent', () => {
  let component: MaklumatKontrakPenyelenggaraanComponent;
  let fixture: ComponentFixture<MaklumatKontrakPenyelenggaraanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatKontrakPenyelenggaraanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatKontrakPenyelenggaraanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
