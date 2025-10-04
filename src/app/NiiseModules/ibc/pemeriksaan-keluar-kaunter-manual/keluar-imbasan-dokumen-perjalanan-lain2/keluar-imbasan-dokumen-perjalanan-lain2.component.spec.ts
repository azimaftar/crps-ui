import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeluarImbasanDokumenPerjalananLain2Component } from './keluar-imbasan-dokumen-perjalanan-lain2.component';

describe('KeluarImbasanDokumenPerjalananLain2Component', () => {
  let component: KeluarImbasanDokumenPerjalananLain2Component;
  let fixture: ComponentFixture<KeluarImbasanDokumenPerjalananLain2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeluarImbasanDokumenPerjalananLain2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeluarImbasanDokumenPerjalananLain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
