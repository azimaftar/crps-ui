import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanaLaporanCarianComponent } from './jana-laporan-carian.component';

describe('JanaLaporanCarianComponent', () => {
  let component: JanaLaporanCarianComponent;
  let fixture: ComponentFixture<JanaLaporanCarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanaLaporanCarianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanaLaporanCarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
