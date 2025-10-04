import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreuiModalComponent } from './coreui-modal.component';

describe('CoreuiModalComponent', () => {
  let component: CoreuiModalComponent;
  let fixture: ComponentFixture<CoreuiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreuiModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreuiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
