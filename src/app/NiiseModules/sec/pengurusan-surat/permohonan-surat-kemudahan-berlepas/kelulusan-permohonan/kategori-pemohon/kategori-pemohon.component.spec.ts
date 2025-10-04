import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriPemohonComponent } from './kategori-pemohon.component';

describe('KategoriPemohonComponent', () => {
  let component: KategoriPemohonComponent;
  let fixture: ComponentFixture<KategoriPemohonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KategoriPemohonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KategoriPemohonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
