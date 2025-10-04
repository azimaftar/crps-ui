import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPenetapanPerananAgensiComponent } from './maklumat-penetapan-peranan-agensi.component';

describe('MaklumatPenetapanPerananAgensiComponent', () => {
  let component: MaklumatPenetapanPerananAgensiComponent;
  let fixture: ComponentFixture<MaklumatPenetapanPerananAgensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPenetapanPerananAgensiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPenetapanPerananAgensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
