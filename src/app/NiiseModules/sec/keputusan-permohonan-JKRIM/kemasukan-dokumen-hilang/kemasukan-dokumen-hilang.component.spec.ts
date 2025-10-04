import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasukanDokumenHilangComponent } from './kemasukan-dokumen-hilang.component';

describe('KemasukanDokumenHilangComponent', () => {
  let component: KemasukanDokumenHilangComponent;
  let fixture: ComponentFixture<KemasukanDokumenHilangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemasukanDokumenHilangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemasukanDokumenHilangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
