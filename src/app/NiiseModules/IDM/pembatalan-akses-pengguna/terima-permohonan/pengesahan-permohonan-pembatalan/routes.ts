import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengesahan-permohonan-pembatalan.component').then(m => m.PengesahanPermohonanPembatalanComponent),
    data: {
      title: `Maklumat-Penatapan-Peranan`
    }
  }
];

