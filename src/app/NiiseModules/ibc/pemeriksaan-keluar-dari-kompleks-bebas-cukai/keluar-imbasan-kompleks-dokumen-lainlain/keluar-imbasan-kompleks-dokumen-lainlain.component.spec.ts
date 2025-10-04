import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeluarImbasanKompleksDokumenLainlainComponent } from './keluar-imbasan-kompleks-dokumen-lainlain.component';

describe('KeluarImbasanKompleksDokumenLainlainComponent', () => {
  let component: KeluarImbasanKompleksDokumenLainlainComponent;
  let fixture: ComponentFixture<KeluarImbasanKompleksDokumenLainlainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeluarImbasanKompleksDokumenLainlainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeluarImbasanKompleksDokumenLainlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
