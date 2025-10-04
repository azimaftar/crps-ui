import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahSlComponent } from './tambah-sl.component';

describe('TambahSlComponent', () => {
  let component: TambahSlComponent;
  let fixture: ComponentFixture<TambahSlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambahSlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
