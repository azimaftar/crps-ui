import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatHartaComponent } from './maklumat-harta.component';

describe('MaklumatHartaComponent', () => {
  let component: MaklumatHartaComponent;
  let fixture: ComponentFixture<MaklumatHartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatHartaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatHartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
