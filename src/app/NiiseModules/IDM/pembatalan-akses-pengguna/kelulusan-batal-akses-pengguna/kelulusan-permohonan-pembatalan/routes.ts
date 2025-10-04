import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kelulusan-permohonan-pembatalan.component').then(m => m.KelulusanPermohonanPembatalanComponent),
    data: {
      title: `Maklumat-Penatapan-Peranan`
    }
  }
];

