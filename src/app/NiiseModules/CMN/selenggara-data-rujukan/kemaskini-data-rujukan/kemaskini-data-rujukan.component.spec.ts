import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemaskiniDataRujukanComponent } from './kemaskini-data-rujukan.component';

describe('KemaskiniDataRujukanComponent', () => {
  let component: KemaskiniDataRujukanComponent;
  let fixture: ComponentFixture<KemaskiniDataRujukanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemaskiniDataRujukanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemaskiniDataRujukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
