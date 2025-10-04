import { ComponentFixture, TestBed } from '@angular/core/testing';

import { kemaskiniNyahaktifTakwimComponent } from './kemaskini-nyahaktif-data-takwim.component';

describe('kemaskiniNyahaktifTakwimComponent', () => {
  let component: kemaskiniNyahaktifTakwimComponent;
  let fixture: ComponentFixture<kemaskiniNyahaktifTakwimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [kemaskiniNyahaktifTakwimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(kemaskiniNyahaktifTakwimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
