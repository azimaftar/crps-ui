import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatTindakanComponent } from './maklumattindakan.component';

describe('MaklumatTindakanComponent', () => {
  let component: MaklumatTindakanComponent;
  let fixture: ComponentFixture<MaklumatTindakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatTindakanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatTindakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
