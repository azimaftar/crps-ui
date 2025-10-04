import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanDokumenPerjalananPassportComponent } from './imbasan-dokumen-perjalanan-passport.component';

describe('ImbasanDokumenPerjalananPassportComponent', () => {
  let component: ImbasanDokumenPerjalananPassportComponent;
  let fixture: ComponentFixture<ImbasanDokumenPerjalananPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanDokumenPerjalananPassportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanDokumenPerjalananPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
