import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparanPasMenaikiKapalBahagianHadapanComponent } from './paparan-pas-menaiki-kapal-bahagian-hadapan.component';

describe('PaparanPasMenaikiKapalBahagianHadapanComponent', () => {
  let component: PaparanPasMenaikiKapalBahagianHadapanComponent;
  let fixture: ComponentFixture<PaparanPasMenaikiKapalBahagianHadapanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparanPasMenaikiKapalBahagianHadapanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparanPasMenaikiKapalBahagianHadapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
