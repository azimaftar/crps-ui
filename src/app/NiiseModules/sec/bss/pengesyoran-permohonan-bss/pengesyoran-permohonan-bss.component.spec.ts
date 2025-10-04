import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesyoranPermohonanbssComponent } from './pengesyoran-permohonan-bss.component';

describe('PengesyoranPermohonanbssComponent', () => {
  let component: PengesyoranPermohonanbssComponent;
  let fixture: ComponentFixture<PengesyoranPermohonanbssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesyoranPermohonanbssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesyoranPermohonanbssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
