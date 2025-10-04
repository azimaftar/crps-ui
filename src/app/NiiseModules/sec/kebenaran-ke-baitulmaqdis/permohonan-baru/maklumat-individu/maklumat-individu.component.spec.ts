import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatIndividuComponent } from './maklumat-individu.component';

describe('MaklumatIndividuComponent', () => {
  let component: MaklumatIndividuComponent;
  let fixture: ComponentFixture<MaklumatIndividuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatIndividuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
