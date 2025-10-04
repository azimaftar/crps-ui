import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KodTindakanComponent } from './kod-tindakan.component';

describe('KodTindakanComponent', () => {
  let component: KodTindakanComponent;
  let fixture: ComponentFixture<KodTindakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KodTindakanComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(KodTindakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create KodTindakanComponent', () => {
    expect(component).toBeTruthy();
  });
});
