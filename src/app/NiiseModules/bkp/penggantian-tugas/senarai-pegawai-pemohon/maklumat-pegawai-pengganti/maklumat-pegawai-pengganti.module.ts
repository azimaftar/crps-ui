import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaklumatPegawaiPenggantiComponent } from './maklumat-pegawai-pengganti.component';

@NgModule({
  declarations: [
    MaklumatPegawaiPenggantiComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MaklumatPegawaiPenggantiComponent
  ]
})
export class MaklumatPegawaiPenggantiModule { }
