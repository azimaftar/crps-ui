import { ComponentFixture, TestBed } from '@angular/core/testing';

import {SejarahIdComponent } from './sejarah-id.component';

describe('DokumenSokonganComponent', () => {
  let component: SejarahIdComponent;
  let fixture: ComponentFixture<SejarahIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SejarahIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SejarahIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



