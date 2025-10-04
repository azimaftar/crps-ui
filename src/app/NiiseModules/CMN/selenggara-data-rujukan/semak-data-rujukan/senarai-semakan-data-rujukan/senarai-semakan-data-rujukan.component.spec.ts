import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiSemakanDataRujukanComponent } from './senarai-semakan-data-rujukan.component';

describe('SenaraiSemakanDataRujukanComponent', () => {
  let component: SenaraiSemakanDataRujukanComponent;
  let fixture: ComponentFixture<SenaraiSemakanDataRujukanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenaraiSemakanDataRujukanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenaraiSemakanDataRujukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
