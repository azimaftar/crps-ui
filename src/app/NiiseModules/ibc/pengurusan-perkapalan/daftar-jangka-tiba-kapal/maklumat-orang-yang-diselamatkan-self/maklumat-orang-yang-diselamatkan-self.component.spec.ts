import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatOrangYangDiselamatkanSelfComponent } from './maklumat-orang-yang-diselamatkan-self.component';

describe('MaklumatOrangYangDiselamatkanSelfComponent', () => {
  let component: MaklumatOrangYangDiselamatkanSelfComponent;
  let fixture: ComponentFixture<MaklumatOrangYangDiselamatkanSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatOrangYangDiselamatkanSelfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatOrangYangDiselamatkanSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
