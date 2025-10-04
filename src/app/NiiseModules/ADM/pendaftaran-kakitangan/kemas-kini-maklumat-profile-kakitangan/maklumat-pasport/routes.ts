import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pasport.component').then(m => m.MaklumatPasportComponent),
    data: {
      title: `Maklumat Pasaport`
    }
  }
];