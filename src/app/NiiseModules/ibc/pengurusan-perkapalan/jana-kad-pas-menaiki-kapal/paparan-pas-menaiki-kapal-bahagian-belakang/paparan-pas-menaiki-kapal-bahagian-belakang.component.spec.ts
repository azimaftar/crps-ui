import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaparanPasMenaikiKapalBahagianBelakangComponent } from './paparan-pas-menaiki-kapal-bahagian-belakang.component';

describe('PaparanPasMenaikiKapalBahagianBelakangComponent', () => {
  let component: PaparanPasMenaikiKapalBahagianBelakangComponent;
  let fixture: ComponentFixture<PaparanPasMenaikiKapalBahagianBelakangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaparanPasMenaikiKapalBahagianBelakangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaparanPasMenaikiKapalBahagianBelakangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
