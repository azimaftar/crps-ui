import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatDrafComponent } from './maklumat-draf.component';

describe('MaklumatDrafComponent', () => {
  let component: MaklumatDrafComponent;
  let fixture: ComponentFixture<MaklumatDrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatDrafComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatDrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
