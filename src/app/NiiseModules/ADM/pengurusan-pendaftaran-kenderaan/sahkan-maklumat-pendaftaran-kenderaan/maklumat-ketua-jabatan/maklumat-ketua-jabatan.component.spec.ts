import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatKetuaJabatanComponent } from './maklumat-ketua-jabatan.component';

describe('MaklumatKetuaJabatanComponent', () => {
  let component: MaklumatKetuaJabatanComponent;
  let fixture: ComponentFixture<MaklumatKetuaJabatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatKetuaJabatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatKetuaJabatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
