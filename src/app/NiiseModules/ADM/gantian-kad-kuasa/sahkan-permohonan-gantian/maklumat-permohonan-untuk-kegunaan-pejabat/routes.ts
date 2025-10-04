import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-permohonan-untuk-kegunaan-pejabat.component').then(m => m.MaklumatPermohonanUntukKegunaanPejabatComponent),
    data: {
      title: `Maklumat Permohonan Untuk Kegunaan Pejabat`
    }
  }
];