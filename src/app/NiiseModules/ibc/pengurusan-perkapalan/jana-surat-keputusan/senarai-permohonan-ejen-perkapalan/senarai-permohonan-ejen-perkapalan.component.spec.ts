import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiPermohonanEjenPerkapalanComponent } from './senarai-permohonan-ejen-perkapalan.component';

describe('SenaraiPermohonanEjenPerkapalanComponent', () => {
  let component: SenaraiPermohonanEjenPerkapalanComponent;
  let fixture: ComponentFixture<SenaraiPermohonanEjenPerkapalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenaraiPermohonanEjenPerkapalanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenaraiPermohonanEjenPerkapalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
