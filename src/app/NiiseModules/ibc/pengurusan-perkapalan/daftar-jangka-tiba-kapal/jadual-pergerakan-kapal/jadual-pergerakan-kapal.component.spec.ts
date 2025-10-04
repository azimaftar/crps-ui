import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadualPergerakanKapalComponent } from './jadual-pergerakan-kapal.component';

describe('JadualPergerakanKapalComponent', () => {
  let component: JadualPergerakanKapalComponent;
  let fixture: ComponentFixture<JadualPergerakanKapalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JadualPergerakanKapalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JadualPergerakanKapalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
