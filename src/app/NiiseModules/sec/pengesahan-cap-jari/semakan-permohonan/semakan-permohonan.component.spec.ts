import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanPermohonanComponent } from './semakan-permohonan.component';

describe('SemakanPermohonanComponent', () => {
  let component: SemakanPermohonanComponent;
  let fixture: ComponentFixture<SemakanPermohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanPermohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
