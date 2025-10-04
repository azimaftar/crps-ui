import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WajahDanIrisKompleksComponent } from './wajah-dan-iris-kompleks.component';

describe('WajahDanIrisKompleksComponent', () => {
  let component: WajahDanIrisKompleksComponent;
  let fixture: ComponentFixture<WajahDanIrisKompleksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WajahDanIrisKompleksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WajahDanIrisKompleksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
