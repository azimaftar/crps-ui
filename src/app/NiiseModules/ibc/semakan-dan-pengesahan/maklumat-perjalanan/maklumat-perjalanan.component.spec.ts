import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPerjalananComponent } from './maklumat-perjalanan.component';

describe('MaklumatPerjalananComponent', () => {
  let component: MaklumatPerjalananComponent;
  let fixture: ComponentFixture<MaklumatPerjalananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPerjalananComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPerjalananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
