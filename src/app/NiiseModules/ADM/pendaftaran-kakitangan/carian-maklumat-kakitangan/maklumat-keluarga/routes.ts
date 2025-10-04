import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-keluarga.component').then(m => m.MaklumatKeluargaComponent),
    data: {
      title: `Maklumat Keluarga`
    }
  }
];