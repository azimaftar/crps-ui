import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapisanKeselamatanComponent } from './tapisan-keselamatan.component';

describe('TapisanKeselamatanComponent', () => {
  let component: TapisanKeselamatanComponent;
  let fixture: ComponentFixture<TapisanKeselamatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapisanKeselamatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapisanKeselamatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
