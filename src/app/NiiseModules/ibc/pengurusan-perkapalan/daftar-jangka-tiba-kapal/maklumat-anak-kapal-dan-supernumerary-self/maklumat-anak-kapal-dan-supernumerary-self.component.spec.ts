import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatAnakKapalDanSupernumerarySelfComponent } from './maklumat-anak-kapal-dan-supernumerary-self.component';

describe('MaklumatAnakKapalDanSupernumerarySelfComponent', () => {
  let component: MaklumatAnakKapalDanSupernumerarySelfComponent;
  let fixture: ComponentFixture<MaklumatAnakKapalDanSupernumerarySelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatAnakKapalDanSupernumerarySelfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatAnakKapalDanSupernumerarySelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
