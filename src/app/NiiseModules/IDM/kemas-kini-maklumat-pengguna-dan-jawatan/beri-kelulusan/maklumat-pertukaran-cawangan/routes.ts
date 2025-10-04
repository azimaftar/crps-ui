import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pertukaran-cawangan.component').then(m => m.MaklumatPertukaranCawanganComponent),
    data: {
      title: `Maklumat-Pertukaran-Cawangan`
    }
  }
];

