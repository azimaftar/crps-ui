import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiPenggunaComponent } from './senarai-pengguna.component';

describe('SenaraiPenggunaComponent', () => {
  let component: SenaraiPenggunaComponent;
  let fixture: ComponentFixture<SenaraiPenggunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenaraiPenggunaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenaraiPenggunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
