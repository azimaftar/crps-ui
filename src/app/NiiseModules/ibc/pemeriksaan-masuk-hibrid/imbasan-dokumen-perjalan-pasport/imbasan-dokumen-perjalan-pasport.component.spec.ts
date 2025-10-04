import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanDokumenPerjalanPasportComponent } from './imbasan-dokumen-perjalan-pasport.component';

describe('ImbasanDokumenPerjalanPasportComponent', () => {
  let component: ImbasanDokumenPerjalanPasportComponent;
  let fixture: ComponentFixture<ImbasanDokumenPerjalanPasportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanDokumenPerjalanPasportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanDokumenPerjalanPasportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
