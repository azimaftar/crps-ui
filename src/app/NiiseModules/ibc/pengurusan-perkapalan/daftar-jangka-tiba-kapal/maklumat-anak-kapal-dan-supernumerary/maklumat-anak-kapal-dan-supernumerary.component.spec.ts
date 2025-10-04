import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatAnakKapalDanSupernumeraryComponent } from './maklumat-anak-kapal-dan-supernumerary.component';

describe('MaklumatAnakKapalDanSupernumeraryComponent', () => {
  let component: MaklumatAnakKapalDanSupernumeraryComponent;
  let fixture: ComponentFixture<MaklumatAnakKapalDanSupernumeraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatAnakKapalDanSupernumeraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatAnakKapalDanSupernumeraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
