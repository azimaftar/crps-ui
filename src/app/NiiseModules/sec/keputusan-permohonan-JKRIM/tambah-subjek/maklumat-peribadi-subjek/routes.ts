import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-peribadi-sabjek.component').then(m => m.MaklumatPeribadiSabjekComponent),
    data: {
      title: `Tambah-subjek`
    }
  },
   {
    path: 'maklumat-tindakan',
    loadChildren: () =>
        import('./maklumat-tindakan/routes').then((m) => m.routes),
  },
  {
    path: 'dokumen-sokongan',
    loadChildren: () =>
        import('./dokumen-sokongan/routes').then((m) => m.routes),
  },
];

