import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanDokumenPassportComponent } from './imbasan-dokumen-passport.component';

describe('ImbasanDokumenPassportComponent', () => {
  let component: ImbasanDokumenPassportComponent;
  let fixture: ComponentFixture<ImbasanDokumenPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanDokumenPassportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanDokumenPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
