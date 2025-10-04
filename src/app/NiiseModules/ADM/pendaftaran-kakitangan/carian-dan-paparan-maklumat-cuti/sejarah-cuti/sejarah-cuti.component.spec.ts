import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejarahCutiComponent } from './sejarah-cuti.component';

describe('SejarahCutiComponent', () => {
  let component: SejarahCutiComponent;
  let fixture: ComponentFixture<SejarahCutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SejarahCutiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SejarahCutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
