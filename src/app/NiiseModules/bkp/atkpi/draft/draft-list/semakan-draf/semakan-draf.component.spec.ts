import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanDrafComponent } from './semakan-draf.component';

describe('SemakanDrafComponent', () => {
  let component: SemakanDrafComponent;
  let fixture: ComponentFixture<SemakanDrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanDrafComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanDrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
