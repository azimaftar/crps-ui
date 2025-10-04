import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatkeluarAwalComponent } from './maklumat-keluar-awal.component';

describe('MaklumatkeluarAwalComponent', () => {
  let component: MaklumatkeluarAwalComponent;
  let fixture: ComponentFixture<MaklumatkeluarAwalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatkeluarAwalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatkeluarAwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
