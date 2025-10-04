import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatCutiSemasaComponent } from './maklumat-cuti-semasa.component';

describe('MaklumatCutiSemasaComponent', () => {
  let component: MaklumatCutiSemasaComponent;
  let fixture: ComponentFixture<MaklumatCutiSemasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatCutiSemasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatCutiSemasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
