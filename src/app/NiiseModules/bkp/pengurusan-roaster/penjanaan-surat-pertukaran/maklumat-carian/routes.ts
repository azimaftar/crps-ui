import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-carian.component').then(m => m.MaklumatCarianComponent),
    data: {
      title: `Carian Penjanaan Surat Pertukaran`
    }
  },
  {
    path: 'maklumat-surat-pertukaran',
    loadChildren: () =>
        import('./maklumat-surat-pertukaran/routes').then((m) => m.routes),
  },
];

