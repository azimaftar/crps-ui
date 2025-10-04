import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahkanMaklumatKakitanganComponent } from './sahkan-maklumat-kakitangan.component';

describe('SahkanMaklumatKakitanganComponent', () => {
  let component: SahkanMaklumatKakitanganComponent;
  let fixture: ComponentFixture<SahkanMaklumatKakitanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SahkanMaklumatKakitanganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SahkanMaklumatKakitanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
