import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanaCetakPermohonKadKuasaComponent } from './jana-cetak-permohon-kad-kuasa.component';

describe('JanaCetakPermohonKadKuasaComponent', () => {
  let component: JanaCetakPermohonKadKuasaComponent;
  let fixture: ComponentFixture<JanaCetakPermohonKadKuasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanaCetakPermohonKadKuasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanaCetakPermohonKadKuasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
