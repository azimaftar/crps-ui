import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiadaPencetakDikesanComponent } from './tiada-pencetak-dikesan.component';

describe('TiadaPencetakDikesanComponent', () => {
  let component: TiadaPencetakDikesanComponent;
  let fixture: ComponentFixture<TiadaPencetakDikesanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiadaPencetakDikesanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiadaPencetakDikesanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
