import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KandunganDataTambahanDanStatusComponent } from './kandungan-data-tambahan-dan-status.component';

describe('KandunganDataTambahanDanStatusComponent', () => {
  let component: KandunganDataTambahanDanStatusComponent;
  let fixture: ComponentFixture<KandunganDataTambahanDanStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KandunganDataTambahanDanStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KandunganDataTambahanDanStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
