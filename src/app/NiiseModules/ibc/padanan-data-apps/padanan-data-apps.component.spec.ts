import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadananDataAppsComponent } from './padanan-data-apps.component';

describe('PadananDataAppsComponent', () => {
  let component: PadananDataAppsComponent;
  let fixture: ComponentFixture<PadananDataAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadananDataAppsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadananDataAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
