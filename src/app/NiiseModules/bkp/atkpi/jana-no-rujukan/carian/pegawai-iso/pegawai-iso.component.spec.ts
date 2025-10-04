import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiIsoComponent } from './pegawai-iso.component';

describe('PegawaiIsoComponent', () => {
  let component: PegawaiIsoComponent;
  let fixture: ComponentFixture<PegawaiIsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PegawaiIsoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PegawaiIsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
