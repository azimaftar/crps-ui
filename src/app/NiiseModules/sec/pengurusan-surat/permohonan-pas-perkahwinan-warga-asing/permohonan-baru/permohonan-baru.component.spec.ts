import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermohonanBaruComponent } from './permohonan-baru.component';

describe('PermohonanBaruComponent', () => {
  let component: PermohonanBaruComponent;
  let fixture: ComponentFixture<PermohonanBaruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermohonanBaruComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermohonanBaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
