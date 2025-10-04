import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbasanCapJariKananComponent } from './imbasan-cap-jari-kanan.component';

describe('ImbasanCapJariKananComponent', () => {
  let component: ImbasanCapJariKananComponent;
  let fixture: ComponentFixture<ImbasanCapJariKananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImbasanCapJariKananComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbasanCapJariKananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
