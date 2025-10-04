import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatalPenggantunganKadKuasaComponent } from './batal-penggantungan-kad-kuasa.component';

describe('BatalPenggantunganKadKuasaComponent', () => {
  let component: BatalPenggantunganKadKuasaComponent;
  let fixture: ComponentFixture<BatalPenggantunganKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatalPenggantunganKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatalPenggantunganKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
