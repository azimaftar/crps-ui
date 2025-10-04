import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarTarikhPublishComponent } from './daftar-tarikh-publish.component';

describe('DaftarTarikhPublishComponent', () => {
  let component: DaftarTarikhPublishComponent;
  let fixture: ComponentFixture<DaftarTarikhPublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaftarTarikhPublishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaftarTarikhPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
