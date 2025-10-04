import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanSenaraiIndividuComponent } from './semakan-senarai-individu.component';

describe('SemakanSenaraiIndividuComponent', () => {
  let component: SemakanSenaraiIndividuComponent;
  let fixture: ComponentFixture<SemakanSenaraiIndividuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanSenaraiIndividuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanSenaraiIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
