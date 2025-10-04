import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatCawanganComponent } from './maklumat-cawangan.component';

describe('MaklumatCawanganComponent', () => {
  let component: MaklumatCawanganComponent;
  let fixture: ComponentFixture<MaklumatCawanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatCawanganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatCawanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
