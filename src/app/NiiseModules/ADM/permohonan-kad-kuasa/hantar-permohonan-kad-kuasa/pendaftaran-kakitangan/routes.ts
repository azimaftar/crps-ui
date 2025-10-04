import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pendaftaran-kakitangan.component').then(m => m.PendaftaranKakitanganComponent),
    data: {
      title: `Pendaftaran Kakitangan`
    }
  }
];