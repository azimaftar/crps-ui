import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./luluskan-pendaftaran-kakitangan.component').then(m => m.LuluskanPendaftaranKakitanganComponent),
    data: {
      title: `Luluskan Pendaftaran Kakitangan`
    }
  }
];