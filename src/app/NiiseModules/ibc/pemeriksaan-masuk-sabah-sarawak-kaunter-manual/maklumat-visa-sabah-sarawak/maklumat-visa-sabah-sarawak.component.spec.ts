import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatVisaSabahSarawakComponent } from './maklumat-visa-sabah-sarawak.component';

describe('MaklumatVisaSabahSarawakComponent', () => {
  let component: MaklumatVisaSabahSarawakComponent;
  let fixture: ComponentFixture<MaklumatVisaSabahSarawakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatVisaSabahSarawakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatVisaSabahSarawakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
