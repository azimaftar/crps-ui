import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengurusan-kakitangan.component').then(m => m.PengurusanKakitanganComponent),
    data: {
      title: `Pengurusan Kakitangan`
    }
  }
];