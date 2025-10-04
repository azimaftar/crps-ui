import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jadual3Syif2Kumpulan4Component } from './jadual3-syif2-kumpulan4.component';

describe('Jadual3Syif2Kumpulan4Component', () => {
  let component: Jadual3Syif2Kumpulan4Component;
  let fixture: ComponentFixture<Jadual3Syif2Kumpulan4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jadual3Syif2Kumpulan4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jadual3Syif2Kumpulan4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
