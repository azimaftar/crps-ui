import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-lokasi-bertugas.component').then(m => m.MaklumatLokasiBertugasComponent),
    data: {
      title: `Maklumat Lokasi Bertugas`
    }
  }
];

