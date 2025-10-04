import { Routes } from "@angular/router";

export const IdmPerhomohonanSemulaIDRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'maklumat-ptj',
        loadChildren: () =>
          import('./maklumat-ptj/routes').then(m => m.routes)
      },
      {
        path: 'maklumat-profil-pegawai',
        loadChildren: () =>
          import('./maklumat-profil-pegawai/routes').then(m => m.routes)
      },
      {
        path: 'maklumat-penetapan-peranan',
        loadChildren: () =>
          import('./maklumat-penetapan-peranan/routes').then(m => m.routes)
      }
    ]
  }
];
