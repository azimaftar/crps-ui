import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatalSlComponent } from './batal-sl.component';

describe('BatalSlComponent', () => {
  let component: BatalSlComponent;
  let fixture: ComponentFixture<BatalSlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatalSlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatalSlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
