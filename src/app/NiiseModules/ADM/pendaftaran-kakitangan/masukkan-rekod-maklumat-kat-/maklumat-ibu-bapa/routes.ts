import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-ibu-bapa.component').then(m => m.MaklumatIbuBapaComponent),
    data: {
      title: `Maklumat Keluarga (Ibu Bapa)`
    }
  }
];