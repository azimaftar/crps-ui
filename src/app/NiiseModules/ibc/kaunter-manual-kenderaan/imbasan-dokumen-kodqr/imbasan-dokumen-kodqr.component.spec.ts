import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanDokumenKodqrComponent } from './imbasan-dokumen-kodqr.component';

describe('ImbasanDokumenKodqrComponent', () => {
  let component: ImbasanDokumenKodqrComponent;
  let fixture: ComponentFixture<ImbasanDokumenKodqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanDokumenKodqrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanDokumenKodqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
