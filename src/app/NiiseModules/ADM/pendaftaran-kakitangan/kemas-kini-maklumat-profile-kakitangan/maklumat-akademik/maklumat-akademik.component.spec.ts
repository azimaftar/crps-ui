import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatAkademikComponent } from './maklumat-akademik.component';

describe('MaklumatAkademikComponent', () => {
  let component: MaklumatAkademikComponent;
  let fixture: ComponentFixture<MaklumatAkademikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatAkademikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatAkademikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
