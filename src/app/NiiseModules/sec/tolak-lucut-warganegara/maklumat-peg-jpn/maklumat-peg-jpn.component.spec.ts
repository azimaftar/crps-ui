import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPegJpnComponent } from './maklumat-peg-jpn.component';

describe('MaklumatPegJpnComponent', () => {
  let component: MaklumatPegJpnComponent;
  let fixture: ComponentFixture<MaklumatPegJpnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPegJpnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPegJpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
