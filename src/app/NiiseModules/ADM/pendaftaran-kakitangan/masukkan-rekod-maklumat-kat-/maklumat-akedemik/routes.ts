import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-akedemik.component').then(m => m.MaklumatAkedemikComponent),
    data: {
      title: `Maklumat Akademik`
    }
  }
];