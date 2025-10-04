import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-akademik.component').then(m => m.MaklumatAkademikComponent),
    data: {
      title: `Maklumat Akademik`
    }
  }
];