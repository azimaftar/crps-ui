import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuluskanPermohonanKadKuasaComponent } from './luluskan-permohonan-kad-kuasa.component';

describe('LuluskanPermohonanKadKuasaComponent', () => {
  let component: LuluskanPermohonanKadKuasaComponent;
  let fixture: ComponentFixture<LuluskanPermohonanKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuluskanPermohonanKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuluskanPermohonanKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
