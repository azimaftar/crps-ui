import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohonNyahaktifComponent } from './mohon-nyahaktif.component';

describe('MohonNyahaktifComponent', () => {
  let component: MohonNyahaktifComponent;
  let fixture: ComponentFixture<MohonNyahaktifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MohonNyahaktifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MohonNyahaktifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
