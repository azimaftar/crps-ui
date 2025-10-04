import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatAkedemikComponent } from './maklumat-akedemik.component';

describe('MaklumatAkedemikComponent', () => {
  let component: MaklumatAkedemikComponent;
  let fixture: ComponentFixture<MaklumatAkedemikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatAkedemikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatAkedemikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
