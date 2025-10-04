import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiSemakanDanTindakanPenyeliaComponent } from './senarai-semakan-dan-tindakan-penyelia.component';

describe('SenaraiSemakanDanTindakanPenyeliaComponent', () => {
  let component: SenaraiSemakanDanTindakanPenyeliaComponent;
  let fixture: ComponentFixture<SenaraiSemakanDanTindakanPenyeliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenaraiSemakanDanTindakanPenyeliaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenaraiSemakanDanTindakanPenyeliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
