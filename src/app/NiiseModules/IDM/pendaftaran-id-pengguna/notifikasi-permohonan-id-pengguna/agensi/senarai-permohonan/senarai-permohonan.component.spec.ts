import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiPermohonanComponent } from './senarai-permohonan.component';

describe('SenaraiPermohonanComponent', () => {
  let component: SenaraiPermohonanComponent;
  let fixture: ComponentFixture<SenaraiPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenaraiPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenaraiPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
