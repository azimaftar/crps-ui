import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPtjComponent } from './maklumat-ptj.component';

describe('MaklumatPtjComponent', () => {
  let component: MaklumatPtjComponent;
  let fixture: ComponentFixture<MaklumatPtjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPtjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPtjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
