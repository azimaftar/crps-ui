import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilihanDokumenComponent } from './pilihan-dokumen.component';

describe('PilihanDokumenComponent', () => {
  let component: PilihanDokumenComponent;
  let fixture: ComponentFixture<PilihanDokumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilihanDokumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilihanDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
