import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDokumenComponent } from './view-dokumen.component';

describe('ViewDokumenComponent', () => {
  let component: ViewDokumenComponent;
  let fixture: ComponentFixture<ViewDokumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDokumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
