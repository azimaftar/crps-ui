import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pengesyoran-permohonan',
    loadChildren: () =>
      import('./pengesyoran-permohonan/routes').then(m => m.routes),
  },
  {
    path: 'kelulusan-permohonan',
    loadChildren: () =>
      import('./kelulusan-permohonan/routes').then(m => m.routes),
  },  
  // {
  //   path: 'kelulusan-permohonan',
  //   loadComponent: () =>
  //     import('./kelulusan-permohonan/kelulusan-permohonan.component').then(
  //       (m) => m.KelulusanPermohonanComponent
  //     ),
  //   data: {
  //     title: `Kelulusan Permohonan`,
  //   },
  // },
];
