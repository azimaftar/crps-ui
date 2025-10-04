import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetakPasMaklumatComponent } from './cetak-pas-maklumat.component';

describe('CetakPasMaklumatComponent', () => {
  let component: CetakPasMaklumatComponent;
  let fixture: ComponentFixture<CetakPasMaklumatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CetakPasMaklumatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CetakPasMaklumatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
