import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-kegiatan-luar.component').then(m => m.MaklumatKegiatanLuarComponent),
    data: {
      title: `Maklumat Kegiatan Luar`
    }
  }
];