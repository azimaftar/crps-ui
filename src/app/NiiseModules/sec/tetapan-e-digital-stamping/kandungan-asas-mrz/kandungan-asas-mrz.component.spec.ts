import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KandunganAsasMRZComponent } from './kandungan-asas-mrz.component';

describe('KandunganAsasMRZComponent', () => {
  let component: KandunganAsasMRZComponent;
  let fixture: ComponentFixture<KandunganAsasMRZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KandunganAsasMRZComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KandunganAsasMRZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
