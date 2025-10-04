import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasKiniStatusPenggantunganKadKuasaComponent } from './kemas-kini-status-penggantungan-kad-kuasa.component';

describe('KemasKiniStatusPenggantunganKadKuasaComponent', () => {
  let component: KemasKiniStatusPenggantunganKadKuasaComponent;
  let fixture: ComponentFixture<KemasKiniStatusPenggantunganKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemasKiniStatusPenggantunganKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemasKiniStatusPenggantunganKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
