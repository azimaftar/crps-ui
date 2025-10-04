import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./jadual3-syif2-kumpulan4.component').then(m => m.Jadual3Syif2Kumpulan4Component),
    data: {
      title: `Jadual 2 Syif Kumpulan 4`
    }
  }
];