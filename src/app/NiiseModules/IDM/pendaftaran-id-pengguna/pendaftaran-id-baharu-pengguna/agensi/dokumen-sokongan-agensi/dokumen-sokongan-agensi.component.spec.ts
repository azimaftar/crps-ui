import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumenSokonganAgensiComponent } from './dokumen-sokongan-agensi.component';

describe('DokumenSokonganAgensiComponent', () => {
  let component: DokumenSokonganAgensiComponent;
  let fixture: ComponentFixture<DokumenSokonganAgensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DokumenSokonganAgensiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DokumenSokonganAgensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
