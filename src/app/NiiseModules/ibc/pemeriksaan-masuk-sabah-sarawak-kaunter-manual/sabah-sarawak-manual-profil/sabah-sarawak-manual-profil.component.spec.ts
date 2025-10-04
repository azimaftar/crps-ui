import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabahSarawakManualProfilComponent } from './sabah-sarawak-manual-profil.component';

describe('SabahSarawakManualProfilComponent', () => {
  let component: SabahSarawakManualProfilComponent;
  let fixture: ComponentFixture<SabahSarawakManualProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SabahSarawakManualProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabahSarawakManualProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
