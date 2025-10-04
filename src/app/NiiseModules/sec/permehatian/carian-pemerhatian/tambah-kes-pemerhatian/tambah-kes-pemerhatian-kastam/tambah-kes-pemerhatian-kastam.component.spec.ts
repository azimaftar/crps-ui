import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahKesPemerhatianKastamComponent } from './tambah-kes-pemerhatian-kastam.component';

describe('TambahKesPemerhatianKastamComponent', () => {
  let component: TambahKesPemerhatianKastamComponent;
  let fixture: ComponentFixture<TambahKesPemerhatianKastamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambahKesPemerhatianKastamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahKesPemerhatianKastamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
