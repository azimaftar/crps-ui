/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaklumatProfilPegawaiComponent } from './maklumat-profil-pegawai.component';

describe('MaklumatProfilPegawaiComponent', () => {
  let component: MaklumatProfilPegawaiComponent;
  let fixture: ComponentFixture<MaklumatProfilPegawaiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaklumatProfilPegawaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaklumatProfilPegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
