import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiSemakanComponent } from './senarai-semakan.component';

describe('SenaraiSemakanComponent', () => {
  let component: SenaraiSemakanComponent;
  let fixture: ComponentFixture<SenaraiSemakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenaraiSemakanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenaraiSemakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
