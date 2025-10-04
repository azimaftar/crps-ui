import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KodAgensiComponent } from './kod-agensi.component';

describe('KodAgensiComponent', () => {
  let component: KodAgensiComponent;
  let fixture: ComponentFixture<KodAgensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KodAgensiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(KodAgensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create KodAgensiComponent', () => {
    expect(component).toBeTruthy();
  });
});
