import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaPasPermitComponent } from './visa-pas-permit.component';

describe('VisaPasPermitComponent', () => {
  let component: VisaPasPermitComponent;
  let fixture: ComponentFixture<VisaPasPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisaPasPermitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaPasPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
