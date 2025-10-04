import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-permohonan.component').then((m) => m.MaklumatPermohonanComponent),
    data: {
        title: "Maklumat Permohonan"
    }
  }
];