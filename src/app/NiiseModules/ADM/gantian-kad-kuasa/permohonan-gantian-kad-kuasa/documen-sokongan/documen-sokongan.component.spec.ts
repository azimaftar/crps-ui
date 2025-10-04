import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumenSokonganComponent } from './documen-sokongan.component';

describe('DocumenSokonganComponent', () => {
  let component: DocumenSokonganComponent;
  let fixture: ComponentFixture<DocumenSokonganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumenSokonganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumenSokonganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
