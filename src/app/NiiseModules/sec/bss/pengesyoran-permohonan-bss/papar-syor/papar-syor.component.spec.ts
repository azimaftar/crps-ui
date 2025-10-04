import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparsyorComponent } from './papar-syor.component';

describe('PaparsyorComponent', () => {
  let component: PaparsyorComponent;
  let fixture: ComponentFixture<PaparsyorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparsyorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparsyorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
