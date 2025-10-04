import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sahkan-maklumat-kakitangan.component').then(m => m.SahkanMaklumatKakitanganComponent),
    data: {
      title: `Sahkan Maklumat Kakitangan`
    }
  }
];