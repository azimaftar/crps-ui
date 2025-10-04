import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarJangkaTibaKapalComponent } from './daftar-jangka-tiba-kapal.component';

describe('DaftarJangkaTibaKapalComponent', () => {
  let component: DaftarJangkaTibaKapalComponent;
  let fixture: ComponentFixture<DaftarJangkaTibaKapalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaftarJangkaTibaKapalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaftarJangkaTibaKapalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
