import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPasportComponent } from './maklumat-pasport.component';

describe('MaklumatPasportComponent', () => {
  let component: MaklumatPasportComponent;
  let fixture: ComponentFixture<MaklumatPasportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPasportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPasportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
