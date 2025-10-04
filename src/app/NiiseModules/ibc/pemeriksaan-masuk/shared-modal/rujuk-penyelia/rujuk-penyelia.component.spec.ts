import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RujukPenyeliaComponent } from './rujuk-penyelia.component';

describe('RujukPenyeliaComponent', () => {
  let component: RujukPenyeliaComponent;
  let fixture: ComponentFixture<RujukPenyeliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RujukPenyeliaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RujukPenyeliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
