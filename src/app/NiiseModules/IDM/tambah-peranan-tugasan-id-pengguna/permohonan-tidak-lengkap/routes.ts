import { Routes } from "@angular/router";

export const PermohonanTidakLangkapRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'permohonan-tambah-peranan',
        loadChildren: () =>
          import('./permohonan-tambah-peranan/routes').then(m => m.routes)
      }
    ]
  }
];
