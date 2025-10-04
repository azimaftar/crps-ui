import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertanyaanCarianComponent } from './pertanyaan-carian.component';

describe('PertanyaanCarianComponent', () => {
  let component: PertanyaanCarianComponent;
  let fixture: ComponentFixture<PertanyaanCarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PertanyaanCarianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PertanyaanCarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
