/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaklumatPertukaranCawanganComponent } from './maklumat-pertukaran-cawangan.component';

describe('MaklumatPertukaranCawanganComponent', () => {
  let component: MaklumatPertukaranCawanganComponent;
  let fixture: ComponentFixture<MaklumatPertukaranCawanganComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaklumatPertukaranCawanganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaklumatPertukaranCawanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
