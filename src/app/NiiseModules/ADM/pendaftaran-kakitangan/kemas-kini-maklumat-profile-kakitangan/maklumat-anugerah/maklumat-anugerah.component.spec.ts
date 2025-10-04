import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatAnugerahComponent } from './maklumat-anugerah.component';

describe('MaklumatAnugerahComponent', () => {
  let component: MaklumatAnugerahComponent;
  let fixture: ComponentFixture<MaklumatAnugerahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatAnugerahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatAnugerahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
