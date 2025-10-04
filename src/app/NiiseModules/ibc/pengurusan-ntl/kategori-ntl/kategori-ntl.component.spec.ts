import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriNtlComponent } from './kategori-ntl.component';

describe('KategoriNtlComponent', () => {
  let component: KategoriNtlComponent;
  let fixture: ComponentFixture<KategoriNtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KategoriNtlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KategoriNtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
