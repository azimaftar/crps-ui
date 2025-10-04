import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumenComponent } from './dokumen.component';

describe('DokumenComponent', () => {
  let component: DokumenComponent;
  let fixture: ComponentFixture<DokumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DokumenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
