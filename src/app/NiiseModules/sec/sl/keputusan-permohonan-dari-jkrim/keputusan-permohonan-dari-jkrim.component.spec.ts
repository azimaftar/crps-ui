import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeputusanPermohonanDariJKRIMComponent } from './keputusan-permohonan-dari-jkrim.component';

describe('KeputusanPermohonanDariJKRIMComponent', () => {
  let component: KeputusanPermohonanDariJKRIMComponent;
  let fixture: ComponentFixture<KeputusanPermohonanDariJKRIMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeputusanPermohonanDariJKRIMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeputusanPermohonanDariJKRIMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
