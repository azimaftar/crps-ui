import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatDrafKeputusanComponent } from './maklumat-draf-keputusan.component';

describe('MaklumatDrafKeputusanComponent', () => {
  let component: MaklumatDrafKeputusanComponent;
  let fixture: ComponentFixture<MaklumatDrafKeputusanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatDrafKeputusanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatDrafKeputusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
