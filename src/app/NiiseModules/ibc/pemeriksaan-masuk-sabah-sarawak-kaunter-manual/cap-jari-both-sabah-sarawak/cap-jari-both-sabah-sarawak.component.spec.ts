import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapJariBothSabahSarawakComponent } from './cap-jari-both-sabah-sarawak.component';

describe('CapJariBothSabahSarawakComponent', () => {
  let component: CapJariBothSabahSarawakComponent;
  let fixture: ComponentFixture<CapJariBothSabahSarawakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapJariBothSabahSarawakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapJariBothSabahSarawakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
