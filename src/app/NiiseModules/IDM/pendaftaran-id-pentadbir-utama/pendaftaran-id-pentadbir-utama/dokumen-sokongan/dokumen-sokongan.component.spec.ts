import { ComponentFixture, TestBed } from '@angular/core/testing';

import {DokumenSokonganComponent } from './dokumen-sokongan.component';

describe('DokumenSokonganComponent', () => {
  let component: DokumenSokonganComponent;
  let fixture: ComponentFixture<DokumenSokonganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DokumenSokonganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DokumenSokonganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



