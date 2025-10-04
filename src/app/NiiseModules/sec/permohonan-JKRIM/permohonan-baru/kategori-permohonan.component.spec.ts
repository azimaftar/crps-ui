import { ComponentFixture, TestBed } from '@angular/core/testing';

// Update the import path and exported symbol to match the actual file
import { KategoriPermohonanComponent } from './kategori-permohonan.component';

describe('KategoriPermohonanComponent', () => {
  let component: KategoriPermohonanComponent;
  let fixture: ComponentFixture<KategoriPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KategoriPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KategoriPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
