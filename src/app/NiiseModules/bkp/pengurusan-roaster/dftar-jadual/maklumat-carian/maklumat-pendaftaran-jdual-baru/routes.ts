import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pendaftaran-jdual-baru.component').then(m => m.MaklumatPendaftaranJdualBaruComponent),
    data: {
      title: `Maklumat Pendaftaran`
    }
  },
  {
    path: 'jadual-roster',
    loadChildren: () =>
        import('./jadual-roster/routes').then((m) => m.routes),
  },
  {
    path: 'jadual2-syif3-kumpulan',
    loadChildren: () =>
        import('./jadual2-syif3-kumpulan/routes').then((m) => m.routes),
  },
  {
    path: 'jadual3-syif2-kumpulan4',
    loadChildren: () =>
        import('./jadual3-syif2-kumpulan4/routes').then((m) => m.routes),
  },
];

