import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranProfilComponent } from './pendaftaran-profil.component';

describe('PendaftaranProfilComponent', () => {
  let component: PendaftaranProfilComponent;
  let fixture: ComponentFixture<PendaftaranProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendaftaranProfilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PendaftaranProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
