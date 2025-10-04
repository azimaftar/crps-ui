import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuatCarianTemplatComponent } from './buat-carian-templat.component';

describe('BuatCarianTemplatComponent', () => {
  let component: BuatCarianTemplatComponent;
  let fixture: ComponentFixture<BuatCarianTemplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuatCarianTemplatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuatCarianTemplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
