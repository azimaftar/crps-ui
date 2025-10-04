import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiPelupusanKadKuasaComponent } from './senarai-pelupusan-kad-kuasa.component';

describe('SenaraiPelupusanKadKuasaComponent', () => {
  let component: SenaraiPelupusanKadKuasaComponent;
  let fixture: ComponentFixture<SenaraiPelupusanKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenaraiPelupusanKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenaraiPelupusanKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
