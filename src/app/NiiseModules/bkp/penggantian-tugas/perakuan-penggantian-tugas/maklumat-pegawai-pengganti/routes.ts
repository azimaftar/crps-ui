import { Routes } from '@angular/router';
import { title } from 'process';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pegawai-pengganti.component').then(m => m.MaklumatPegawaiPenggantiComponent),
    data: {
      title: `Maklumat Pegawai Pengganti`
    }
  },
  {
    path: 'perakuan-penggantian-tugas',
    loadChildren:() => import ('../routes').then(m=>m.routes),
    data:{
      title: 'Maklumat Pegawai Pemohon'
    }
  }
];
