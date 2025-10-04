import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatTanggunganComponent } from './maklumat-tanggungan.component';

describe('MaklumatTanggunganComponent', () => {
  let component: MaklumatTanggunganComponent;
  let fixture: ComponentFixture<MaklumatTanggunganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatTanggunganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatTanggunganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
