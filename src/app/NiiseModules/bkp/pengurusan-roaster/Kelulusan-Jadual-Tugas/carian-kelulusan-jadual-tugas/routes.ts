import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./carian-kelulusan-jadual-tugas.component').then(m => m.CarianKelulusanJadualTugasComponent),
    data: {
           title: `Daftar Kelulusan Jadual Tugas`,
         },
  },
  {
    path: 'maklumat-lokasi',
    loadChildren: () =>
      import('./maklumat-lokasi/routes').then((m) => m.routes),
  },
];

