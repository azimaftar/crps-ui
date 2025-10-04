import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahSlDokumenSokonganComponent } from './tambah-sl-dokumen-sokongan.component';

describe('TambahSlDokumenSokonganComponent', () => {
  let component: TambahSlDokumenSokonganComponent;
  let fixture: ComponentFixture<TambahSlDokumenSokonganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambahSlDokumenSokonganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahSlDokumenSokonganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
