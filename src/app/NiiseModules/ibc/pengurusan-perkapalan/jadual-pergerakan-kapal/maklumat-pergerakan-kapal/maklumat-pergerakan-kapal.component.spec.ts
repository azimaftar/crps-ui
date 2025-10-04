import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPergerakanKapalComponent } from './maklumat-pergerakan-kapal.component';

describe('MaklumatPergerakanKapalComponent', () => {
  let component: MaklumatPergerakanKapalComponent;
  let fixture: ComponentFixture<MaklumatPergerakanKapalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPergerakanKapalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPergerakanKapalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
