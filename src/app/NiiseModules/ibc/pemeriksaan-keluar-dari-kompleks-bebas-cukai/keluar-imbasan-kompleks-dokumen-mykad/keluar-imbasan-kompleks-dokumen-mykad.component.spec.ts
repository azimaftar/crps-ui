import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeluarImbasanKompleksDokumenMykadComponent } from './keluar-imbasan-kompleks-dokumen-mykad.component';

describe('KeluarImbasanKompleksDokumenMykadComponent', () => {
  let component: KeluarImbasanKompleksDokumenMykadComponent;
  let fixture: ComponentFixture<KeluarImbasanKompleksDokumenMykadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeluarImbasanKompleksDokumenMykadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeluarImbasanKompleksDokumenMykadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
