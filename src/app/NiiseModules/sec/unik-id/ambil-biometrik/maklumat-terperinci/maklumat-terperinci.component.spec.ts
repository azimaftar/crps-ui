import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatTerperinci } from './maklumat-terperinci.component';

describe('MaklumatTerperinci', () => {
  let component: MaklumatTerperinci;
  let fixture: ComponentFixture<MaklumatTerperinci>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatTerperinci],
    }).compileComponents();

    fixture = TestBed.createComponent(MaklumatTerperinci);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
