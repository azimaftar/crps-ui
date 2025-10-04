import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-carian.component').then(m => m.MaklumatCarianComponent),
    data: {
      title: `Maklumat Kekunci Carian`
    }
  },
  {
    path: 'maklumat-pendaftaran-jdual-baru',
    loadChildren: () =>
        import('./maklumat-pendaftaran-jdual-baru/routes').then((m) => m.routes),
  },
  // {
  //   path: 'maklumat-pendaftaran-jdual-baru',
  //   loadComponent: () =>
  //       import('./maklumat-pendaftaran-jdual-baru/maklumat-pendaftaran-jdual-baru.component').then((m) => m.MaklumatPendaftaranJdualBaruComponent),
  // },
];

