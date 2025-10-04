import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TidakDijumpaiJpnComponent } from './tidak-dijumpai-jpn.component';

describe('TidakDijumpaiJpnComponent', () => {
  let component: TidakDijumpaiJpnComponent;
  let fixture: ComponentFixture<TidakDijumpaiJpnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TidakDijumpaiJpnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TidakDijumpaiJpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
