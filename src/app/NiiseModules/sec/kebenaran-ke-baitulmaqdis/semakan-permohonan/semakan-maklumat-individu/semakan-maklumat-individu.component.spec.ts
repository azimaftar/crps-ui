import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatSemakanPermohonanComponent } from './semakan-maklumat-individu.component';

describe('MaklumatSemakanPermohonanComponent', () => {
  let component: MaklumatSemakanPermohonanComponent;
  let fixture: ComponentFixture<MaklumatSemakanPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatSemakanPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatSemakanPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
