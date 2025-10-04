import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'draft',
  //   loadChildren: () =>
  //     import('.draft/draft-list/routes').then((m) => m.routes),
  // },

  {
    path: 'draft-form',
    loadComponent: () =>
      import('../draft-form/draft-form.component').then((m) => m.DraftFormComponent),
    title: `Draft Form`,
  },
  {
    path: 'maklumat-pegawai',
    loadComponent: () =>
      import('../draft-form/maklumat-pegawai/maklumat-pegawai.component').then((m) => m.MaklumatPegawaiComponent),
    title: `Maklumat Pegawai`,
  },
  {
    path: 'maklumat-draf',
    loadComponent: () =>
      import('../draft-form/maklumat-draf/maklumat-draf.component').then((m) => m.MaklumatDrafComponent),
    title: `Maklumat Draf`,
  },

];

