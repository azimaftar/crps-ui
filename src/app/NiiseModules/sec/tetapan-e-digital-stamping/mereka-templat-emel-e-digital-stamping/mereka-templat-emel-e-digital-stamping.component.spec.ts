import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerekaTemplatEmelEDigitalStampingComponent } from './mereka-templat-emel-e-digital-stamping.component';

describe('MerekaTemplatEmelEDigitalStampingComponent', () => {
  let component: MerekaTemplatEmelEDigitalStampingComponent;
  let fixture: ComponentFixture<MerekaTemplatEmelEDigitalStampingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerekaTemplatEmelEDigitalStampingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerekaTemplatEmelEDigitalStampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
