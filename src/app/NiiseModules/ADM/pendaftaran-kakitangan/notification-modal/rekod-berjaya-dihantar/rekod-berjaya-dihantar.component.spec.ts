import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekodBerjayaDihantarComponent } from './rekod-berjaya-dihantar.component';

describe('RekodBerjayaDihantarComponent', () => {
  let component: RekodBerjayaDihantarComponent;
  let fixture: ComponentFixture<RekodBerjayaDihantarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RekodBerjayaDihantarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RekodBerjayaDihantarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
