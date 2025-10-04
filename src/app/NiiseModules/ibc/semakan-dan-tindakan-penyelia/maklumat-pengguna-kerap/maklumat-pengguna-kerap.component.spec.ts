import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPenggunaKerapComponent } from './maklumat-pengguna-kerap.component';

describe('MaklumatPenggunaKerapComponent', () => {
  let component: MaklumatPenggunaKerapComponent;
  let fixture: ComponentFixture<MaklumatPenggunaKerapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPenggunaKerapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPenggunaKerapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
