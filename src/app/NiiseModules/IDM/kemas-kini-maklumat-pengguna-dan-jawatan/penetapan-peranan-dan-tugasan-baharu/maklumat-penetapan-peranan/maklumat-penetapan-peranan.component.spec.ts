/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaklumatPenetapanPerananComponent } from './maklumat-penetapan-peranan.component';

describe('MaklumatPenetapanPerananComponent', () => {
  let component: MaklumatPenetapanPerananComponent;
  let fixture: ComponentFixture<MaklumatPenetapanPerananComponent>;

beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    declarations: [MaklumatPenetapanPerananComponent]
  }).compileComponents();
}));


  beforeEach(() => {
    fixture = TestBed.createComponent(MaklumatPenetapanPerananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
