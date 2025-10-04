import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanKelulusanKetuaUnitComponent } from './semakan-kelulusan-ketua-unit.component';

describe('SemakanKelulusanKetuaUnitComponent', () => {
  let component: SemakanKelulusanKetuaUnitComponent;
  let fixture: ComponentFixture<SemakanKelulusanKetuaUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanKelulusanKetuaUnitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanKelulusanKetuaUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
