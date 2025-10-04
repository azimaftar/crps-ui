import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPenumpangGelapSelfComponent } from './maklumat-penumpang-gelap-self.component';

describe('MaklumatPenumpangGelapSelfComponent', () => {
  let component: MaklumatPenumpangGelapSelfComponent;
  let fixture: ComponentFixture<MaklumatPenumpangGelapSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPenumpangGelapSelfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPenumpangGelapSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
