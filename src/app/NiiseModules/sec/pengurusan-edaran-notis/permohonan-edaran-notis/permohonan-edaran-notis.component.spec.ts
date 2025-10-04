import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermohonanEdaranNotisComponent } from './permohonan-edaran-notis.component';

describe('PermohonanEdaranNotisComponent', () => {
  let component: PermohonanEdaranNotisComponent;
  let fixture: ComponentFixture<PermohonanEdaranNotisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermohonanEdaranNotisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermohonanEdaranNotisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
