import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahSubjekComponent } from './tambah-subjek.component';

describe('TambahSubjekComponent', () => {
  let component: TambahSubjekComponent;
  let fixture: ComponentFixture<TambahSubjekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambahSubjekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahSubjekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
