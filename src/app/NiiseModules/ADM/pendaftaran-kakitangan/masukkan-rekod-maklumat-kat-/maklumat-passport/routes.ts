import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-passport.component').then(m => m.MaklumatPassportComponent),
    data: {
      title: `Maklumat Passaport`
    }
  }
];