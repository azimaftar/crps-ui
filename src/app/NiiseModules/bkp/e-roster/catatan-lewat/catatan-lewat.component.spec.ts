import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatatanLewatComponent } from './catatan-lewat.component';

describe('CatatanLewatComponent', () => {
  let component: CatatanLewatComponent;
  let fixture: ComponentFixture<CatatanLewatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatatanLewatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatatanLewatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
