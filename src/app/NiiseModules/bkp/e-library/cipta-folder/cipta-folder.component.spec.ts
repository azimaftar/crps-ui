import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiptaFolderComponent } from './cipta-folder.component';

describe('CiptaFolderComponent', () => {
  let component: CiptaFolderComponent;
  let fixture: ComponentFixture<CiptaFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiptaFolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiptaFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
