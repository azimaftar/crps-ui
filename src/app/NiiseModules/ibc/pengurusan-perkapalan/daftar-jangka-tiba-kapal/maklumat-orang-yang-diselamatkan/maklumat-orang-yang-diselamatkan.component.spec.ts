import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatOrangYangDiselamatkanComponent } from './maklumat-orang-yang-diselamatkan.component';

describe('MaklumatOrangYangDiselamatkanComponent', () => {
  let component: MaklumatOrangYangDiselamatkanComponent;
  let fixture: ComponentFixture<MaklumatOrangYangDiselamatkanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatOrangYangDiselamatkanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatOrangYangDiselamatkanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
