import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: 'pendaftaran-permohonan',
    loadChildren: () =>
      import('./pendaftaran-permohonan/routes').then((m) => m.routes),
    title: `Pendaftaran Baru`,
  },

  {
    path: 'semakan-permohonan',
    loadChildren: () =>
      import('./semakan-permohonan/routes').then((m) => m.routes),
    title: `Semakan Permohonan`,
  },

  {
    path: 'kelulusan',
    loadChildren: () =>
      import('./kelulusan/routes').then((m) => m.routes),
    title: `Kelulusan`,
  },

];

