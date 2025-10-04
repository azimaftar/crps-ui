import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiSyakComponent } from './senarai-syak.component';

describe('SenaraiSyakComponent', () => {
  let component: SenaraiSyakComponent;
  let fixture: ComponentFixture<SenaraiSyakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenaraiSyakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenaraiSyakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
