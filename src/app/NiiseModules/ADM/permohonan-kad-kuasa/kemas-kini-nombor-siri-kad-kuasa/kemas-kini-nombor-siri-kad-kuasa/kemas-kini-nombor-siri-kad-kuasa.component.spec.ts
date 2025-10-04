import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasKiniNomborSiriKadKuasaComponent } from './kemas-kini-nombor-siri-kad-kuasa.component';

describe('KemasKiniNomborSiriKadKuasaComponent', () => {
  let component: KemasKiniNomborSiriKadKuasaComponent;
  let fixture: ComponentFixture<KemasKiniNomborSiriKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KemasKiniNomborSiriKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KemasKiniNomborSiriKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
