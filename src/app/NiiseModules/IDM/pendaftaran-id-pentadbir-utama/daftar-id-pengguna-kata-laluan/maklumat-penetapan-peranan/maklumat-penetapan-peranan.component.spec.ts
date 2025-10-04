import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPenetapanPerananComponent } from './maklumat-penetapan-peranan.component';

describe('MaklumatPenetapanPerananComponent', () => {
  let component: MaklumatPenetapanPerananComponent;
  let fixture: ComponentFixture<MaklumatPenetapanPerananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPenetapanPerananComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPenetapanPerananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
