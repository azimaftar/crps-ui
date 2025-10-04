import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesyoranSenaraiIndividuComponent } from './pengesyoran-senarai-individu.component';

describe('PengesyoranSenaraiIndividuComponent', () => {
  let component: PengesyoranSenaraiIndividuComponent;
  let fixture: ComponentFixture<PengesyoranSenaraiIndividuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesyoranSenaraiIndividuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesyoranSenaraiIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
