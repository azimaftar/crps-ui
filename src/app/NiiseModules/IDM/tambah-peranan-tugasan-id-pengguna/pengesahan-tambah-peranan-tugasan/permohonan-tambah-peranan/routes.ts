import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./permohonan-tambah-peranan.component').then(m => m.PermohonanTambahPerananComponent),
    data: {
      title: `Maklumat-Penatapan-Peranan`
    }
  }
];

