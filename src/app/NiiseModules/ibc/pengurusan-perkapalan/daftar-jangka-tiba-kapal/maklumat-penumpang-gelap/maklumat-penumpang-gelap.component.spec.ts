import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPenumpangGelapComponent } from './maklumat-penumpang-gelap.component';

describe('MaklumatPenumpangGelapComponent', () => {
  let component: MaklumatPenumpangGelapComponent;
  let fixture: ComponentFixture<MaklumatPenumpangGelapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPenumpangGelapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPenumpangGelapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
