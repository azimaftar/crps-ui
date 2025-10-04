import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatKontrakPembekalanMakananComponent } from './maklumat-kontrak-pembekalan-makanan.component';

describe('MaklumatKontrakPembekalanMakananComponent', () => {
  let component: MaklumatKontrakPembekalanMakananComponent;
  let fixture: ComponentFixture<MaklumatKontrakPembekalanMakananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatKontrakPembekalanMakananComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatKontrakPembekalanMakananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
