import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahDataRujukanComponent } from './tambah-data-rujukan.component';

describe('TambahDataRujukanComponent', () => {
  let component: TambahDataRujukanComponent;
  let fixture: ComponentFixture<TambahDataRujukanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambahDataRujukanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahDataRujukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
