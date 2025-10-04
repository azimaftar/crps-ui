import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarikhSuntikVaksinComponent } from './tarikh-suntik-vaksin.component';

describe('TarikhSuntikVaksinComponent', () => {
  let component: TarikhSuntikVaksinComponent;
  let fixture: ComponentFixture<TarikhSuntikVaksinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarikhSuntikVaksinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarikhSuntikVaksinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
