import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasKiniTemplatComponent } from './kemas-kini-templat.component';

describe('KemasKiniTemplatComponent', () => {
  let component: KemasKiniTemplatComponent;
  let fixture: ComponentFixture<KemasKiniTemplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemasKiniTemplatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemasKiniTemplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
