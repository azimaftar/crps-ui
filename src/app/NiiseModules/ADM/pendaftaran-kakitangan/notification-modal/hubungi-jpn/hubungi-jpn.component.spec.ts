import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubungiJpnComponent } from './hubungi-jpn.component';

describe('HubungiJpnComponent', () => {
  let component: HubungiJpnComponent;
  let fixture: ComponentFixture<HubungiJpnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubungiJpnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubungiJpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
