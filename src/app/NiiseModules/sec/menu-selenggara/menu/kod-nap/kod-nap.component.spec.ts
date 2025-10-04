import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KodNapComponent } from './kod-nap.component';

describe('KodNapComponent', () => {
  let component: KodNapComponent;
  let fixture: ComponentFixture<KodNapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KodNapComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(KodNapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create KodNapComponent', () => {
    expect(component).toBeTruthy();
  });
});
