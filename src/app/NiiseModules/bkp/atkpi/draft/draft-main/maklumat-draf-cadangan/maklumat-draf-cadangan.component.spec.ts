import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatDrafCadanganComponent } from './maklumat-draf-cadangan.component';

describe('MaklumatDrafCadanganComponent', () => {
  let component: MaklumatDrafCadanganComponent;
  let fixture: ComponentFixture<MaklumatDrafCadanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatDrafCadanganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatDrafCadanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
