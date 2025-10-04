import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeputusanPermohonanbssJkrimComponent } from './keputusan-permohonan-bss-jkrim.component';

describe('KeputusanPermohonanbssJkrimComponent', () => {
  let component: KeputusanPermohonanbssJkrimComponent;
  let fixture: ComponentFixture<KeputusanPermohonanbssJkrimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeputusanPermohonanbssJkrimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeputusanPermohonanbssJkrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
