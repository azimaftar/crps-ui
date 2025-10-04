import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatJangkaKetibaanKapalComponent } from './maklumat-jangka-ketibaan-kapal.component';

describe('MaklumatJangkaKetibaanKapalComponent', () => {
  let component: MaklumatJangkaKetibaanKapalComponent;
  let fixture: ComponentFixture<MaklumatJangkaKetibaanKapalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatJangkaKetibaanKapalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatJangkaKetibaanKapalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
