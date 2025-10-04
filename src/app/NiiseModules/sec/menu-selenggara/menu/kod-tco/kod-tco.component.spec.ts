import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KodTcoComponent } from './kod-tco.component';

describe('KodTcoComponent', () => {
  let component: KodTcoComponent;
  let fixture: ComponentFixture<KodTcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KodTcoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(KodTcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create KodTcoComponent', () => {
    expect(component).toBeTruthy();
  });
});
