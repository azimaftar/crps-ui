import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatKeluargaComponent } from './maklumat-keluarga.component';

describe('MaklumatKeluargaComponent', () => {
  let component: MaklumatKeluargaComponent;
  let fixture: ComponentFixture<MaklumatKeluargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatKeluargaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatKeluargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
