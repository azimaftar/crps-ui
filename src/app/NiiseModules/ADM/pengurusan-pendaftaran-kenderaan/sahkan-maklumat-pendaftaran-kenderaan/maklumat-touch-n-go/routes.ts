import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-touch-n-go.component').then(m => m.MaklumatTouchNGoComponent),
    data: {
      title: `Carian Maklumat Kenderaan`
    }
  }
];