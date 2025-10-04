import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelulusanSenaraiIndividuComponent } from './kelulusan-senarai-individu.component';

describe('KelulusanSenaraiIndividuComponent', () => {
  let component: KelulusanSenaraiIndividuComponent;
  let fixture: ComponentFixture<KelulusanSenaraiIndividuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KelulusanSenaraiIndividuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelulusanSenaraiIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
