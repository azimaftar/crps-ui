import { ComponentFixture, TestBed } from '@angular/core/testing';

import {IDMDokumenSokonganComponent } from './dokumen-sokongan.component';

describe('IDMDokumenSokonganComponent', () => {
  let component: IDMDokumenSokonganComponent;
  let fixture: ComponentFixture<IDMDokumenSokonganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IDMDokumenSokonganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IDMDokumenSokonganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



