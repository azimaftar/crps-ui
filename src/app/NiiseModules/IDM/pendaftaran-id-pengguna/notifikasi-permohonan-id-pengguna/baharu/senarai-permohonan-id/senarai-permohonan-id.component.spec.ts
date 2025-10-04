import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiPermohonanIdComponent } from './senarai-permohonan-id.component';

describe('SenaraiPermohonanIdComponent', () => {
  let component: SenaraiPermohonanIdComponent;
  let fixture: ComponentFixture<SenaraiPermohonanIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenaraiPermohonanIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenaraiPermohonanIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
