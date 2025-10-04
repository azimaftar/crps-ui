import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiRujukanBerdasarkanTableComponent } from './senarai-rujukan-berdasarkan-table.component';

describe('SenaraiRujukanBerdasarkanTableComponent', () => {
  let component: SenaraiRujukanBerdasarkanTableComponent;
  let fixture: ComponentFixture<SenaraiRujukanBerdasarkanTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenaraiRujukanBerdasarkanTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenaraiRujukanBerdasarkanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

