import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { PilihJenisSelenggaraComponent } from './pilih-jenis-selenggara.component';
import {MesejNotifikasiComponent} from './mesej-notifikasi.component';

describe('MesejNotifikasiComponent', () => {
  let component: MesejNotifikasiComponent;
  let fixture: ComponentFixture<MesejNotifikasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesejNotifikasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesejNotifikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
