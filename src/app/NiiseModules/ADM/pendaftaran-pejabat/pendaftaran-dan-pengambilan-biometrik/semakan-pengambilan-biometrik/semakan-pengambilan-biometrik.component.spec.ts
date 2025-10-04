import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanPengambilanBiometrikComponent } from './semakan-pengambilan-biometrik.component';

describe('SemakanPengambilanBiometrikComponent', () => {
  let component: SemakanPengambilanBiometrikComponent;
  let fixture: ComponentFixture<SemakanPengambilanBiometrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemakanPengambilanBiometrikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemakanPengambilanBiometrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
