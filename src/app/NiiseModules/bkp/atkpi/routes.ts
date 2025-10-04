import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'draft',
    loadChildren: () =>
      import('./draft/draft-list/routes').then((m) => m.routes),
  },
   {
    path: 'draft',
    loadChildren: () =>
      import('./draft/draft-form/routes').then((m) => m.routes),
  },
  {
    path: 'draft/draft-main',
    loadChildren: () =>
      import('./draft/draft-main/routes').then(m => m.routes)
  },
  {
    path: 'draft/semakan-draf/maklumat-pegawai-mendaftar',
    loadComponent: () =>
      import('./draft/draft-main/maklumat-pegawai-mendaftar/maklumat-pegawai-mendaftar.component').then(m => m.MaklumatPegawaiMendaftarComponent),
  },
  {
    path: 'draft/semakan-draf/maklumat-draf-cadangan',
    loadComponent: () =>
      import('./draft/draft-main/maklumat-draf-cadangan/maklumat-draf-cadangan.component').then(m => m.MaklumatDrafCadanganComponent),
  }
];