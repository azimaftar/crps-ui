import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./draft-main.component').then(m => m.DraftMainComponent),
    title: 'Draft Main'
  },
  {
    path: 'maklumat-pegawai-mendaftar',
    loadChildren: () =>
      import('./maklumat-pegawai-mendaftar/routes').then(m => m.routes)
  },
  {
    path: 'maklumat-draf-cadangan',
    loadChildren: () =>
      import('./maklumat-draf-cadangan/routes').then(m => m.routes)
  }
];