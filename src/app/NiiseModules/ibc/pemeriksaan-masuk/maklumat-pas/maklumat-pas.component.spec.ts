import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatPasComponent } from './maklumat-pas.component';

describe('MaklumatPasComponent', () => {
  let component: MaklumatPasComponent;
  let fixture: ComponentFixture<MaklumatPasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatPasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
