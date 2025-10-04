import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-carian-lokasi-tugas.component').then(m => m.MaklumatCarianLokasiTugasComponent),
    data: {
      title: `Maklumat Carian Lokasi Bertugas`
    }
  },
  {
    path: 'maklumat-lokasi-bertugas',
    loadChildren: () =>
        import('./maklumat-lokasi-bertugas/routes').then((m) => m.routes),
  },
];

