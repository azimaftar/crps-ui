import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PindaSlMaklumatTindakanComponent } from './pinda-sl-maklumat-tindakan.component';

describe('PindaSlMaklumatTindakanComponent', () => {
  let component: PindaSlMaklumatTindakanComponent;
  let fixture: ComponentFixture<PindaSlMaklumatTindakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PindaSlMaklumatTindakanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PindaSlMaklumatTindakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
