import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sahkan-pendaftaran-kakitangan.component').then(m => m.SahkanPendaftaranKakitanganComponent),
    data: {
      title: `Sahkan Pendaftaran Kakitangan`
    }
  }
];