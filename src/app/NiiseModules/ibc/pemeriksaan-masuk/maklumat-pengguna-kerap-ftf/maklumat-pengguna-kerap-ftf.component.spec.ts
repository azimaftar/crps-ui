import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPenggunaKerapFtfComponent } from './maklumat-pengguna-kerap-ftf.component';

describe('MaklumatPenggunaKerapFtfComponent', () => {
  let component: MaklumatPenggunaKerapFtfComponent;
  let fixture: ComponentFixture<MaklumatPenggunaKerapFtfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPenggunaKerapFtfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPenggunaKerapFtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
