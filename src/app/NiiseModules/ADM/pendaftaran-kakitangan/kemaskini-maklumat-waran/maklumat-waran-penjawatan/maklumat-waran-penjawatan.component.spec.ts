import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatWaranPenjawatanComponent } from './maklumat-waran-penjawatan.component';

describe('MaklumatWaranPenjawatanComponent', () => {
  let component: MaklumatWaranPenjawatanComponent;
  let fixture: ComponentFixture<MaklumatWaranPenjawatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatWaranPenjawatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatWaranPenjawatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
