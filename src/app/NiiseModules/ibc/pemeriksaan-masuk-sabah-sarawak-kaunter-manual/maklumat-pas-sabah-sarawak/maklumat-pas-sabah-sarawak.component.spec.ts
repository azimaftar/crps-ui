import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPasSabahSarawakComponent } from './maklumat-pas-sabah-sarawak.component';

describe('MaklumatPasSabahSarawakComponent', () => {
  let component: MaklumatPasSabahSarawakComponent;
  let fixture: ComponentFixture<MaklumatPasSabahSarawakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPasSabahSarawakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPasSabahSarawakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
