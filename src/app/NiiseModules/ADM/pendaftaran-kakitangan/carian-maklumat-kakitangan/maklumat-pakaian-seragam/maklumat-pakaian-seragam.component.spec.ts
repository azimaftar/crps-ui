import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPakaianSeragamComponent } from './maklumat-pakaian-seragam.component';

describe('MaklumatPakaianSeragamComponent', () => {
  let component: MaklumatPakaianSeragamComponent;
  let fixture: ComponentFixture<MaklumatPakaianSeragamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPakaianSeragamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPakaianSeragamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
