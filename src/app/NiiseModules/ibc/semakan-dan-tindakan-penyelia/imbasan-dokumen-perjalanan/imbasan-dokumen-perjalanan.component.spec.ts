import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanDokumenPerjalananComponent } from './imbasan-dokumen-perjalanan.component';

describe('ImbasanDokumenPerjalananComponent', () => {
  let component: ImbasanDokumenPerjalananComponent;
  let fixture: ComponentFixture<ImbasanDokumenPerjalananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanDokumenPerjalananComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanDokumenPerjalananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
