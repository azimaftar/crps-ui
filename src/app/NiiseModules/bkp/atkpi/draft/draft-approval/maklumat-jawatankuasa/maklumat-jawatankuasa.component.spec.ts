import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaklumatJawatankuasaComponent } from './maklumat-jawatankuasa.component';

describe('MaklumatJawatankuasaComponent', () => {
  let component: MaklumatJawatankuasaComponent;
  let fixture: ComponentFixture<MaklumatJawatankuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaklumatJawatankuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaklumatJawatankuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
