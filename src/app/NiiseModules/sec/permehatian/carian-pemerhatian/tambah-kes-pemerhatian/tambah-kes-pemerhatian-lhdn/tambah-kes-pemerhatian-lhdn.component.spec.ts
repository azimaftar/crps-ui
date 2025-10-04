import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahKesPemerhatianLHDNComponent } from './tambah-kes-pemerhatian-lhdn.component';

describe('TambahKesPemerhatianLHDNComponent', () => {
  let component: TambahKesPemerhatianLHDNComponent;
  let fixture: ComponentFixture<TambahKesPemerhatianLHDNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambahKesPemerhatianLHDNComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahKesPemerhatianLHDNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
