import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceIrisSabahSarawakComponent } from './face-iris-sabah-sarawak.component';

describe('FaceIrisSabahSarawakComponent', () => {
  let component: FaceIrisSabahSarawakComponent;
  let fixture: ComponentFixture<FaceIrisSabahSarawakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceIrisSabahSarawakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceIrisSabahSarawakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
