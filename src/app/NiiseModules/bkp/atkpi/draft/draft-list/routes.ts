import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'draft',
  //   loadChildren: () =>
  //     import('.draft/draft-list/routes').then((m) => m.routes),
  // },

  {
    path: 'draft-list',
    loadComponent: () =>
      import('../draft-list/draft-list.component').then((m) => m.DraftListComponent),
    title: `Draft List`,
  },
  {
    path: 'maklumat-pegawai',
    loadComponent: () =>
      import('../draft-list/maklumat-pegawai/maklumat-pegawai.component').then((m) => m.MaklumatPegawaiComponent),
    title: `Maklumat Pegawai`,
  },
  {
    path: 'maklumat-draf',
    loadComponent: () =>
      import('../draft-list/maklumat-draf/maklumat-draf.component').then((m) => m.MaklumatDrafComponent),
    title: `Maklumat Draf`,
  },

];

