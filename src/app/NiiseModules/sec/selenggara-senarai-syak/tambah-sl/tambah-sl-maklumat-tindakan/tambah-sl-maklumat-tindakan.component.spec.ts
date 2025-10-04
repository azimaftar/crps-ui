import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahSlMaklumatTindakanComponent } from './tambah-sl-maklumat-tindakan.component';

describe('TambahSlMaklumatTindakanComponent', () => {
  let component: TambahSlMaklumatTindakanComponent;
  let fixture: ComponentFixture<TambahSlMaklumatTindakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambahSlMaklumatTindakanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahSlMaklumatTindakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
