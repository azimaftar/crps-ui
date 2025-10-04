import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanMaklumatIndividuComponent } from './kelulusan-maklumat-individu.component';

describe('KelulusanMaklumatIndividuComponent', () => {
  let component: KelulusanMaklumatIndividuComponent;
  let fixture: ComponentFixture<KelulusanMaklumatIndividuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanMaklumatIndividuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanMaklumatIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
