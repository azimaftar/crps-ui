import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekodBerjayaDisimpanComponent } from './rekod-berjaya-disimpan.component';

describe('RekodBerjayaDisimpanComponent', () => {
  let component: RekodBerjayaDisimpanComponent;
  let fixture: ComponentFixture<RekodBerjayaDisimpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RekodBerjayaDisimpanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RekodBerjayaDisimpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
