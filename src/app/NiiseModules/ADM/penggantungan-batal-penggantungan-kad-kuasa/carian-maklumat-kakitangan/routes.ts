import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./carian-maklumat-kakitangan.component').then(m => m.CarianMaklumatKakitanganComponent),
    data: {
      title: `Carian Maklumat Kakitangan`
    }
  }
];