import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrTidakBerjayaComponent } from './ocr-tidak-berjaya.component';

describe('OcrTidakBerjayaComponent', () => {
  let component: OcrTidakBerjayaComponent;
  let fixture: ComponentFixture<OcrTidakBerjayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OcrTidakBerjayaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcrTidakBerjayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
