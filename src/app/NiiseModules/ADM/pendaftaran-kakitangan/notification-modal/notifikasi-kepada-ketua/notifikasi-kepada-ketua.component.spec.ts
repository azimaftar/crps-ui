import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifikasiKepadaKetuaComponent } from './notifikasi-kepada-ketua.component';

describe('NotifikasiKepadaKetuaComponent', () => {
  let component: NotifikasiKepadaKetuaComponent;
  let fixture: ComponentFixture<NotifikasiKepadaKetuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifikasiKepadaKetuaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifikasiKepadaKetuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
