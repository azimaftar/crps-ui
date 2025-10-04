import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./kod-tindakan.component').then(m => m.KodTindakanComponent),
    data: { title: 'Kod Tindakan' }
  }
];
