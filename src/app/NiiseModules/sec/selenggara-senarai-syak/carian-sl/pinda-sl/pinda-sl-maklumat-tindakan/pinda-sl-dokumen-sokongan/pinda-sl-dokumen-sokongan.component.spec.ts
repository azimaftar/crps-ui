import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PindaSlDokumenSokonganComponent } from './pinda-sl-dokumen-sokongan.component';

describe('PindaSlDokumenSokonganComponent', () => {
  let component: PindaSlDokumenSokonganComponent;
  let fixture: ComponentFixture<PindaSlDokumenSokonganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PindaSlDokumenSokonganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PindaSlDokumenSokonganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
