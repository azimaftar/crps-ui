import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatProfilPengembaraPenyeliaComponent } from './maklumat-profil-pengembara-penyelia.component';

describe('MaklumatProfilPengembaraPenyeliaComponent', () => {
  let component: MaklumatProfilPengembaraPenyeliaComponent;
  let fixture: ComponentFixture<MaklumatProfilPengembaraPenyeliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatProfilPengembaraPenyeliaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatProfilPengembaraPenyeliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
