import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SemakLaporanComponent } from './semak-laporan.component';

describe('SemakLaporanComponent', () => {
  let component: SemakLaporanComponent;
  let fixture: ComponentFixture<SemakLaporanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SemakLaporanComponent] // <-- use declarations, not imports
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemakLaporanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
