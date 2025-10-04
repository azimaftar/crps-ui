import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./konfigurasi-nombor-fail.component').then(m => m.KonfigurasiNomborFailComponent),
    data: {
      title: `Konfigurasi Nombor Fail`
    }
  }
];

