import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanKakitanganComponent } from './pengurusan-kakitangan.component';

describe('PengurusanKakitanganComponent', () => {
  let component: PengurusanKakitanganComponent;
  let fixture: ComponentFixture<PengurusanKakitanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengurusanKakitanganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengurusanKakitanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
