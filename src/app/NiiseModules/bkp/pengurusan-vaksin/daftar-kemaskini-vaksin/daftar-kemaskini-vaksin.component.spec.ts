import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarKemaskiniVaksinComponent } from './daftar-kemaskini-vaksin.component';

describe('DaftarKemaskiniVaksinComponent', () => {
  let component: DaftarKemaskiniVaksinComponent;
  let fixture: ComponentFixture<DaftarKemaskiniVaksinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaftarKemaskiniVaksinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaftarKemaskiniVaksinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
