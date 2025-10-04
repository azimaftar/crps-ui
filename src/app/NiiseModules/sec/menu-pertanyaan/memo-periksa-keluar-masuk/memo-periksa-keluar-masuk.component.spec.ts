import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoPeriksaKeluarMasukComponent } from './memo-periksa-keluar-masuk.component';

describe('MemoPeriksaKeluarMasukComponent', () => {
  let component: MemoPeriksaKeluarMasukComponent;
  let fixture: ComponentFixture<MemoPeriksaKeluarMasukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoPeriksaKeluarMasukComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoPeriksaKeluarMasukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
