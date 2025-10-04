import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatDokumenSokonganComponent } from './maklumat-dokumen-sokongan.component';

describe('MaklumatDokumenSokonganComponent', () => {
  let component: MaklumatDokumenSokonganComponent;
  let fixture: ComponentFixture<MaklumatDokumenSokonganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatDokumenSokonganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatDokumenSokonganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
