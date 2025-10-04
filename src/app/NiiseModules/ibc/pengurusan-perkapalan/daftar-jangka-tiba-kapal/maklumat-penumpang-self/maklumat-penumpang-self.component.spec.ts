import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPenumpangSelfComponent } from './maklumat-penumpang-self.component';

describe('MaklumatPenumpangSelfComponent', () => {
  let component: MaklumatPenumpangSelfComponent;
  let fixture: ComponentFixture<MaklumatPenumpangSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPenumpangSelfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPenumpangSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
