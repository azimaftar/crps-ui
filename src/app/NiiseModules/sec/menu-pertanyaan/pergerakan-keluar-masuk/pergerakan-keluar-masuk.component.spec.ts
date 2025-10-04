import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PergerakanKeluarMasukComponent } from './pergerakan-keluar-masuk.component';

describe('PergerakanKeluarMasukComponent', () => {
  let component: PergerakanKeluarMasukComponent;
  let fixture: ComponentFixture<PergerakanKeluarMasukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PergerakanKeluarMasukComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PergerakanKeluarMasukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
