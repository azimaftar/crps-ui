import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengambilanBiometrikComponent } from './pengambilan-biometrik.component';

describe('PengambilanBiometrikComponent', () => {
  let component: PengambilanBiometrikComponent;
  let fixture: ComponentFixture<PengambilanBiometrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengambilanBiometrikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengambilanBiometrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
