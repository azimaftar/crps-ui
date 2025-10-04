import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanDataRujukanComponent } from './semakan-data-rujukan.component';

describe('SemakanDataRujukanComponent', () => {
  let component: SemakanDataRujukanComponent;
  let fixture: ComponentFixture<SemakanDataRujukanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanDataRujukanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanDataRujukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
