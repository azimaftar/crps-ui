import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanDokumenLainlainComponent } from './imbasan-dokumen-lainlain.component';

describe('ImbasanDokumenLainlainComponent', () => {
  let component: ImbasanDokumenLainlainComponent;
  let fixture: ComponentFixture<ImbasanDokumenLainlainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanDokumenLainlainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanDokumenLainlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
