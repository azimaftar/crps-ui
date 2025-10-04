import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamanUtamaPasMenaikiKapalComponent } from './laman-utama-pas-menaiki-kapal.component';

describe('LamanUtamaPasMenaikiKapalComponent', () => {
  let component: LamanUtamaPasMenaikiKapalComponent;
  let fixture: ComponentFixture<LamanUtamaPasMenaikiKapalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LamanUtamaPasMenaikiKapalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamanUtamaPasMenaikiKapalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
