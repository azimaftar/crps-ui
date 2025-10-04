import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPasMainComponent } from './maklumat-pas-main.component';

describe('MaklumatPasMainComponent', () => {
  let component: MaklumatPasMainComponent;
  let fixture: ComponentFixture<MaklumatPasMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPasMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPasMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
