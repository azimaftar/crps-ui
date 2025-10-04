import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemaskiniVaksinComponent } from './kemaskini-vaksin.component';

describe('KemaskiniVaksinComponent', () => {
  let component: KemaskiniVaksinComponent;
  let fixture: ComponentFixture<KemaskiniVaksinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemaskiniVaksinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemaskiniVaksinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
