import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderWujudComponent } from './folder-wujud.component';

describe('FolderWujudComponent', () => {
  let component: FolderWujudComponent;
  let fixture: ComponentFixture<FolderWujudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderWujudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderWujudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
