import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatKapalComponent } from './maklumat-kapal.component';

describe('MaklumatKapalComponent', () => {
  let component: MaklumatKapalComponent;
  let fixture: ComponentFixture<MaklumatKapalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatKapalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatKapalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
