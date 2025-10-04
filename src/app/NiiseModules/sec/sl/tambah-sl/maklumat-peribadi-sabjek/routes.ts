import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-peribadi-sabjek.component').then(m => m.MaklumatPeribadiSabjekComponent),
    data: {
      title: `Tambah-SL`
    }
  },
   {
    path: 'maklumat-tindakan',
    loadChildren: () =>
        import('./maklumat-tindakan/routes').then((m) => m.routes),
  },
  {
    path: 'dokumen-sokonganSL',
    loadChildren: () =>
        import('./dokumen-sokonganSL/routes').then((m) => m.routes),
  },
];

