import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengesyoran-permohonan2.component').then(m => m.PengesyoranPermohonan2Component),
    data: {
      title: `Maklumat Permohonan`
    }
  }
];



