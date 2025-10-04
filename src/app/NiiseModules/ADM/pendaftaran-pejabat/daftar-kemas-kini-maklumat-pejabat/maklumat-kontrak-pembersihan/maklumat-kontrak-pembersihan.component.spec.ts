import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatKontrakPembersihanComponent } from './maklumat-kontrak-pembersihan.component';

describe('MaklumatKontrakPembersihanComponent', () => {
  let component: MaklumatKontrakPembersihanComponent;
  let fixture: ComponentFixture<MaklumatKontrakPembersihanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatKontrakPembersihanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatKontrakPembersihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
