import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahDataTakwimComponent } from './tambah-data-takwim.component';

describe('TambahDataTakwimComponent', () => {
  let component: TambahDataTakwimComponent;
  let fixture: ComponentFixture<TambahDataTakwimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambahDataTakwimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahDataTakwimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
