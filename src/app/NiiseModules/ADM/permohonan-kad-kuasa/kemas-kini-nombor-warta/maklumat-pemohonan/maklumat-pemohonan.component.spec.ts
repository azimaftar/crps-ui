import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPemohonanComponent } from './maklumat-pemohonan.component';

describe('MaklumatPemohonanComponent', () => {
  let component: MaklumatPemohonanComponent;
  let fixture: ComponentFixture<MaklumatPemohonanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPemohonanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPemohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
