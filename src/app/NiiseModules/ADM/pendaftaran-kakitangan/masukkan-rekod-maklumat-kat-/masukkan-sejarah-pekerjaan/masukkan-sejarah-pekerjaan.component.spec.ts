import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasukkanSejarahPekerjaanComponent } from './masukkan-sejarah-pekerjaan.component';

describe('MasukkanSejarahPekerjaanComponent', () => {
  let component: MasukkanSejarahPekerjaanComponent;
  let fixture: ComponentFixture<MasukkanSejarahPekerjaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasukkanSejarahPekerjaanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasukkanSejarahPekerjaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
