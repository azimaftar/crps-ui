import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'permohonan-gantian-tugas',
    loadChildren: () =>
      import('./permohonan-gantian-tugas/routes').then((m) => m.routes),
  },
  {
    path: 'perakuan-penggantian-tugas',
    loadChildren: () =>
      import('./perakuan-penggantian-tugas/routes').then((m) => m.routes),
  },
  {
    path: 'senarai-pegawai-pemohon',
    loadChildren: () =>
      import('./senarai-pegawai-pemohon/routes').then((m) => m.routes),
  },

  { path: '**', redirectTo: 'senarai-gantian-tugas' }

];

