import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanaLaporanComponent } from './jana-laporan.component';

describe('JanaLaporanComponent', () => {
  let component: JanaLaporanComponent;
  let fixture: ComponentFixture<JanaLaporanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanaLaporanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanaLaporanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
