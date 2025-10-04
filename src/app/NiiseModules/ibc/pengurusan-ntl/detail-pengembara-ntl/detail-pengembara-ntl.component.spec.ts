import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPengembaraNtlComponent } from './detail-pengembara-ntl.component';

describe('DetailPengembaraNtlComponent', () => {
  let component: DetailPengembaraNtlComponent;
  let fixture: ComponentFixture<DetailPengembaraNtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPengembaraNtlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPengembaraNtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
