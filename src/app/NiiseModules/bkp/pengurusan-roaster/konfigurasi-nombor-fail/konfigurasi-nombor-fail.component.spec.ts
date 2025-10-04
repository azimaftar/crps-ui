import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonfigurasiNomborFailComponent } from './konfigurasi-nombor-fail.component';

describe('KonfigurasiNomborFailComponent', () => {
  let component: KonfigurasiNomborFailComponent;
  let fixture: ComponentFixture<KonfigurasiNomborFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonfigurasiNomborFailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonfigurasiNomborFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
