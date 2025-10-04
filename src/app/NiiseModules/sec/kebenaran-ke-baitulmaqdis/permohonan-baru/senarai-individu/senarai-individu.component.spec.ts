import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiIndividuComponent } from './senarai-individu.component';

describe('SenaraiIndividuComponent', () => {
  let component: SenaraiIndividuComponent;
  let fixture: ComponentFixture<SenaraiIndividuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenaraiIndividuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenaraiIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
