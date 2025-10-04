import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-penguasaan-bahasa.component').then(m => m.MaklumatPenguasaanBahasaComponent),
    data: {
      title: `Maklumat Penguasaan Bahasa`
    }
  }
];