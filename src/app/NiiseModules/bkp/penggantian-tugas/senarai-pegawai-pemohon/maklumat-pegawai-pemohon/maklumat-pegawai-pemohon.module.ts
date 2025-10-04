// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { MaklumatPegawaiPemohonComponent } from './maklumat-pegawai-pemohon.component';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     FormsModule,
//     NgModule
//   ]
// })
// export class MaklumatPegawaiPemohonModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaklumatPegawaiPemohonComponent } from './maklumat-pegawai-pemohon.component';

@NgModule({
  declarations: [
    MaklumatPegawaiPemohonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MaklumatPegawaiPemohonComponent
  ]
})
export class MaklumatPegawaiPemohonModule { }
