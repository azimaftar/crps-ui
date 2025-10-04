import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatJangkaTibaKapalComponent } from './maklumat-jangka-tiba-kapal.component';

describe('MaklumatJangkaTibaKapalComponent', () => {
  let component: MaklumatJangkaTibaKapalComponent;
  let fixture: ComponentFixture<MaklumatJangkaTibaKapalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatJangkaTibaKapalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatJangkaTibaKapalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
