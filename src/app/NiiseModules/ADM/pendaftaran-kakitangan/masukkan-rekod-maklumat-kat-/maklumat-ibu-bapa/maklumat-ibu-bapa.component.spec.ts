import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatIbuBapaComponent } from './maklumat-ibu-bapa.component';

describe('MaklumatIbuBapaComponent', () => {
  let component: MaklumatIbuBapaComponent;
  let fixture: ComponentFixture<MaklumatIbuBapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatIbuBapaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatIbuBapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
