import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasKiniMaklumatArahanComponent } from './kemas-kini-maklumat-arahan.component';

describe('KemasKiniMaklumatArahanComponent', () => {
  let component: KemasKiniMaklumatArahanComponent;
  let fixture: ComponentFixture<KemasKiniMaklumatArahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemasKiniMaklumatArahanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemasKiniMaklumatArahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
