import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPaparanMasaJadualComponent } from './setting-paparan-masa-jadual.component';

describe('SettingPaparanMasaJadualComponent', () => {
  let component: SettingPaparanMasaJadualComponent;
  let fixture: ComponentFixture<SettingPaparanMasaJadualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingPaparanMasaJadualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingPaparanMasaJadualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
