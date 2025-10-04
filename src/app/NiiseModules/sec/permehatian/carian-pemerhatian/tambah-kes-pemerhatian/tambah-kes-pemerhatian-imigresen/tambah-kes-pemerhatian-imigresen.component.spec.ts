import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahKesPemerhatianImigresenComponent } from './tambah-kes-pemerhatian-imigresen.component';

describe('TambahKesPemerhatianImigresenComponent', () => {
  let component: TambahKesPemerhatianImigresenComponent;
  let fixture: ComponentFixture<TambahKesPemerhatianImigresenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambahKesPemerhatianImigresenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahKesPemerhatianImigresenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
