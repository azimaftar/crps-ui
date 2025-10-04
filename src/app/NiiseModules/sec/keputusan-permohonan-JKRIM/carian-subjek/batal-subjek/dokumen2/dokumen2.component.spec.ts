import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dokumen2Component } from './dokumen2.component';

describe('Dokumen2Component', () => {
  let component: Dokumen2Component;
  let fixture: ComponentFixture<Dokumen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dokumen2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dokumen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
