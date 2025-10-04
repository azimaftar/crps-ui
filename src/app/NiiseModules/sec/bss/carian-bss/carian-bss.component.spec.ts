import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianbssComponent } from './carian-bss.component';

describe('CarianSlComponent', () => {
  let component: CarianbssComponent;
  let fixture: ComponentFixture<CarianbssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarianbssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarianbssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
