import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarVaksinComponent } from './daftar-vaksin.component';

describe('DaftarVaksinComponent', () => {
  let component: DaftarVaksinComponent;
  let fixture: ComponentFixture<DaftarVaksinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaftarVaksinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaftarVaksinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
