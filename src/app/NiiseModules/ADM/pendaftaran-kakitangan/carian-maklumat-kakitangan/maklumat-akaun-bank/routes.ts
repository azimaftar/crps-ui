import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-akaun-bank.component').then(m => m.MaklumatAkaunBankComponent),
    data: {
      title: `Maklumat Akaun Bank`
    }
  }
];