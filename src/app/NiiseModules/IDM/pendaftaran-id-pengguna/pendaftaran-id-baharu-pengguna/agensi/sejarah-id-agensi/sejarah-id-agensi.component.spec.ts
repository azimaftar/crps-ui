import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejarahIdAgensiComponent } from './sejarah-id-agensi.component';

describe('SejarahIdAgensiComponent', () => {
  let component: SejarahIdAgensiComponent;
  let fixture: ComponentFixture<SejarahIdAgensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SejarahIdAgensiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SejarahIdAgensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
