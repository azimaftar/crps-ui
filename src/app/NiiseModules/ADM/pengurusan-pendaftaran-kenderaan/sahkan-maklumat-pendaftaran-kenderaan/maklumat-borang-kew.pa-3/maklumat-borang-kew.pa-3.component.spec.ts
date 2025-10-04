import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatBorangKEWPA3Component } from './maklumat-borang-kew.pa-3.component';

describe('MaklumatBorangKEWPA3Component', () => {
  let component: MaklumatBorangKEWPA3Component;
  let fixture: ComponentFixture<MaklumatBorangKEWPA3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatBorangKEWPA3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatBorangKEWPA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
