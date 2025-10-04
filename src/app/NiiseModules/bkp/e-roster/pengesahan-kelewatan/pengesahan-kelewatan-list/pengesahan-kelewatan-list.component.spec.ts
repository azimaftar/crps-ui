import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengesahanKelewatanListComponent } from './pengesahan-kelewatan-list.component';

describe('PengesahanKelewatanListComponent', () => {
  let component: PengesahanKelewatanListComponent;
  let fixture: ComponentFixture<PengesahanKelewatanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PengesahanKelewatanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengesahanKelewatanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
