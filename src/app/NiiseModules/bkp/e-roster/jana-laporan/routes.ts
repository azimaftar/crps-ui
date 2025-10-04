import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./jana-laporan.component').then(m => m.JanaLaporanComponent),
    data: {
      title: `Laporan`
    }
  },
  {
    path: 'maklumat-laporan',
    loadChildren: () =>
        import('./maklumat-laporan/routes').then((m) => m.routes),
  },
  {
    path: 'maklumat-laporan-kelewatan',
    loadChildren: () =>
        import('./maklumat-laporan-kelewatan/routes').then((m) => m.routes),
  },
  {
    path: 'maklumat-laporan-ot',
    loadChildren: () =>
        import('./maklumat-laporan-ot/routes').then((m) => m.routes),
  },
];

