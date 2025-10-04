import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermohonanNyahaktifComponent } from './permohonan-nyahaktif.component';

describe('PermohonanNyahaktifComponent', () => {
  let component: PermohonanNyahaktifComponent;
  let fixture: ComponentFixture<PermohonanNyahaktifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermohonanNyahaktifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermohonanNyahaktifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
